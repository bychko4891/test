import {ReactNode} from "react";
import {
    getJwtAccessToken,
    redirectUnauthorized,
    regenerateAccessToken, regenerateAllTokens, SuccessAccessTokenRegeneration,
} from "./jwtSessionService/authTokenHandler";
import {cookies} from "next/headers";
import {JWT_REFRESH_TOKEN} from "../../CooKiesName";
import {SetAccessToken} from "./jwtSessionService/SetAccessToken";
import {SetAllTokens} from "./jwtSessionService/SetAllTokens";

export default async function Layout({children}: { children: ReactNode }) {

    const accessTokenCookie = await getJwtAccessToken();
    const accessTokenCookieIsEmpty = accessTokenCookie === undefined;
console.log(accessTokenCookie + ' token cookie ! ! !')
    if (!accessTokenCookie) {
        return (
            <>
                <h1> Layout protected Layout protectedLayout
                    protectedLayout protectedLayout protectedLayout
                    protectedLayout protectedLayout protectedLayout
                    protectedLayout protectedLayout protectedLayout
                    protectedLayout protectedLayout protectedLayout
                    protectedLayout protectedLayout protectedLayout
                    protectedLayout protectedLayout protectedLayout
                    protectedLayout protectedLayout protectedLayout protectedLayout protected</h1>
                {children}
            </>
        );
    }

    const accessToken = await newAccessToken(accessTokenCookieIsEmpty);
    if (accessToken) {
        return (
            <>
                <h1> Layout protected</h1>

                {children}
                <SetAccessToken accessToken={accessToken}/>
            </>
        );
    } else {
        const tokens = await newRefreshAndAccessToken();
        return (
            <>
                <h1> Layout protected</h1>

                {children}
                {/*<SetAllTokens tokens={tokens}/>*/}

            </>
        );
    }

}

async function newAccessToken(accessTokenIsEmpty: boolean): Promise<string | undefined> {

    if (accessTokenIsEmpty) {
        return await regenerateAccessToken();
    }
    return undefined;
}

async function newRefreshAndAccessToken(): Promise<SuccessAccessTokenRegeneration> {

    return await regenerateAllTokens();
}
