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

    if (accessTokenCookie === undefined) {
        const accessToken = await newAccessToken(accessTokenCookieIsEmpty);
        if (accessToken !== undefined) {
            return (
                <>
                    <h1> Layout protected</h1>
                    {children}
                    <SetAccessToken accessToken={accessToken} />
                </>
            );
        } else {
            const tokens = await newRefreshAndAccessToken();
            return (
                <>
                    <h1> Layout protected</h1>
                    {children}
                    <SetAllTokens tokens={tokens} />
                </>
            );
        }
    } else {
        return (
            <>
                <h1> Layout protected</h1>
                {children}
            </>
        );
    }
}

async function newAccessToken(accessTokenIsEmpty: boolean): Promise<string | undefined> {

    if (accessTokenIsEmpty) {
        const refreshToken = cookies().get(JWT_REFRESH_TOKEN);
        if (!refreshToken) {
            throw await redirectUnauthorized();
        }

        return await regenerateAccessToken(refreshToken.value);
    }
    return undefined;
}

async function newRefreshAndAccessToken(): Promise<SuccessAccessTokenRegeneration> {
    const refreshToken = cookies().get(JWT_REFRESH_TOKEN);
    if (!refreshToken) {
        throw await redirectUnauthorized();
    }

    return await regenerateAllTokens(refreshToken.value);
}
