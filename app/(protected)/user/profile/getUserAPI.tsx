'use server'

import {env} from "@/env.mjs";
import {getJwtAccessToken, regenerateAccessToken} from "@/app/(protected)/jwtSessionService/authTokenHandler";
import {fetchWithToken} from "@/app/fetchWithToken";

export interface UserSuccessResponse {
    uuid: string;
    login: string;
    name: string;
    email: string;
    about: string;
    dateOfCreated: string;
}

export async function getUserAPI() {

    const token = await getJwtAccessToken();


    console.log(token + ' token user get !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

    try {
        const response = await fetch(env.SERVER_API_URL + '/api/user/profile', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        if(response.status === 401) {
            console.log(' user get 401 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }

        const userRemote = (await response.json()) as UserSuccessResponse;
        return userRemote;
        // }
    } catch (error) {
        console.error('Error fetching data:');
        // console.error('Error fetching data:', error);
        // Обробка помилки, якщо запит не вдалося виконати
    }


}