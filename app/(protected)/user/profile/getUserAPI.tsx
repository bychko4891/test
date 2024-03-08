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
        // console.log(userRemote.dateOfCreated + " 854906854906854906895068059468905468905463963-568-356834-5685-49684950368-568-35683045-97")
        return userRemote;
        // }
    } catch (error) {
        console.error('Error fetching data USER:');
        // console.error('Error fetching data:', error);
        // Обробка помилки, якщо запит не вдалося виконати
    }


}