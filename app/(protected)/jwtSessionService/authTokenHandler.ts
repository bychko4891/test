import {cookies} from "next/headers";
import {JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN} from "@/CooKiesName";
import {redirect} from "next/navigation";
import { env } from "@/env.mjs";


export type SuccessAccessTokenRegeneration = {
    type: "Bearer";
    jwtAccessToken: string;
    jwtRefreshToken: string;
};

export async function getJwtAccessToken(): Promise<string | undefined> {
    const accessToken = cookies().get(JWT_ACCESS_TOKEN);
    if (accessToken && accessToken.value) {

        return accessToken.value;
    }
    return undefined;
}

export async function regenerateAccessToken(): Promise<string | undefined> {

    const refreshToken = cookies().get(JWT_REFRESH_TOKEN);

    const response = await fetch(env.SERVER_API_URL + '/api/auth/refresh/access-token', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwtRefreshToken: refreshToken }),
    });

    if(response.status === 401) {

        return undefined;

    } else {
        const json = (await response.json()) as SuccessAccessTokenRegeneration;
        return json.jwtAccessToken;
    }
}
export async function regenerateAllTokens(): Promise<SuccessAccessTokenRegeneration> {
    const refreshToken = cookies().get(JWT_REFRESH_TOKEN);
    const response = await fetch(env.SERVER_API_URL + '/api/auth/refresh/refresh-token', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwtRefreshToken: refreshToken }),
    });

    return (await response.json()) as SuccessAccessTokenRegeneration;
}

export async function redirectUnauthorized() {
    redirect('/login');
}
