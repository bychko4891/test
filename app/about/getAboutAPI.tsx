'use server'

import {env} from "@/env.mjs";
import {getJwtAccessToken} from "@/app/(protected)/jwtSessionService/authTokenHandler";


type AboutSuccessResponse = {
    name: string;
    text: string;
};
export async function getAboutAPI() {

const accessToken = await getJwtAccessToken();

    console.log(accessToken + ' token !!! !!!');
    const response = await fetch(env.SERVER_API_URL + '/api/about', {
        method: 'GET',
        //1 headers: {
        //     'Authorization' : "Bearer " + accessToken,
        // }
    });
    console.log(response + " about response ***************************")
    if (response.status === 200) {
        console.log('200')
        const aboutPage = (await response.json()) as AboutSuccessResponse;
        return aboutPage;
    }
    if (response.status === 401) {
        console.log('401')
        return null;
    }
}