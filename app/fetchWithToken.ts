import {getJwtAccessToken} from "@/app/(protected)/jwtSessionService/authTokenHandler";

export const fetchWithToken = async (url: string, options: any) => {
const token = await getJwtAccessToken();
console.log(token + " token ********************************************************")
    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
    };

    const updatedOptions = { ...options, headers };

    return fetch(url, updatedOptions);
};