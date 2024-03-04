'use server';

import {getAboutAPI} from "@/app/about/getAboutAPI";

export const AboutContent = async () => {

    const about = await getAboutAPI();

    return (
        <>
        </>
    );
}