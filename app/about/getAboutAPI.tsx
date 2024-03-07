'use server'

import {env} from "@/env.mjs";
import {getJwtAccessToken} from "@/app/(protected)/jwtSessionService/authTokenHandler";


type AboutSuccessResponse = {
    namePage: string;
    htmlDescription: string;
    htmlTitle: string;
    pageURL: string;
    contentsAppPage:ContentPage [];
};

type ContentPage = {
    h1: string;
    description: string;
}

export async function getAboutAPI() {

const accessToken = await getJwtAccessToken();

    try {
        const response = await fetch(env.SERVER_API_URL + '/api/about', {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // const data = await response.json();
        // console.log(data + ' about !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // if(!data) {
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            const aboutPage = (await response.json()) as AboutSuccessResponse;
            console.log(aboutPage.pageURL + ' url ! ! ! ! ! !');
            return aboutPage;
        // }
    } catch (error) {
        console.error('Error fetching data:', error);
        // Обробка помилки, якщо запит не вдалося виконати
    }




    // console.log(accessToken + ' token !!! !!!');
    // const response = await fetch(env.SERVER_API_URL + '/api/about', {
    //     method: 'GET'
    // });

    // console.log(response + " about response ***************************")
    // if (response.status === 200) {
    //     console.log('200')
    //
    //     // const aboutPage = (await response.json()) as AboutSuccessResponse;
    //     return undefined;
    // }
    // if (response.status === 401) {
    //     console.log('401')
    //     return null;
    // }
}