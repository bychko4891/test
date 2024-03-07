import NextAuth, {AuthOptions, User} from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials'
import {env} from "@/env.mjs";
import {setJwtAccessToken, setJwtRefreshToken} from "@/app/(protected)/jwtSessionService/SetHttpOnlyCookies";


type SuccessLoginResponse = {

    jwtAccessToken: string;

    jwtRefreshToken: string;

    id: string;

    name: string;

    image: string;
};
export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: {label: 'emeil', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;
                const formData = {
                    email: credentials.email,
                    password: credentials.password
                }
                console.log("123 123 123")
                const response = await fetch(env.SERVER_API_URL + '/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });
                console.log(response.status);
                if (response.status === 401) {
                    console.log(response + " 401 !!!! 1!! 1 1");
                    return null;
                }
                if (response.status === 200) {
                    const user = (await response.json()) as SuccessLoginResponse;

                    setJwtAccessToken(user.jwtAccessToken);
                    setJwtRefreshToken(user.jwtRefreshToken);

                    return user as User;
                }

                return null;
            }
        })
    ],

    pages: {
        signIn: '/login',
        // error: '/your-custom-error-page', // вказуйте свою власну сторінку для обробки помилок
        // signOut: '/signout', // сторінка для виходу
        // newUser: '/newuser', // сторінка для нових користувачів

    },

    callbacks: {
        async redirect({url, baseUrl}) {
            // return baseUrl;
            return url;
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            // session.accessToken = token.accessToken
            // session.user.id = token.id

            return session
        },
        async signIn({account, profile, user, credentials}) {
            if (account?.provider === "google") {
                if (profile?.email!) {
                    const formData = {
                        email: profile.email,
                        name: profile.name
                    }
                    const response = await fetch(env.SERVER_API_URL + '/api/auth/google', {
                        method: 'POST',
                        body: JSON.stringify(formData),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.status === 200) {

                        const userRemote = (await response.json()) as SuccessLoginResponse;

                        profile.image = userRemote.image;
                        user.id = userRemote.id;
                        user.image = userRemote.image;
                        setJwtAccessToken(userRemote.jwtAccessToken);
                        setJwtRefreshToken(userRemote.jwtRefreshToken);

                        return true;
                    }
                }

                return false;
            } else  if (account?.provider === "credentials") {
                // console.log("credentials credentials  credentials credentials credentials credentials credentials credentials credentials")
                return true;
            }
            return false;
        },


    },

}
