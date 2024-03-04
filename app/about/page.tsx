"use server";

import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {getAboutAPI} from "@/app/about/getAboutAPI";

type Resp = {
    name:string;
    text: string;
}


export default async function About() {


    const session = await getServerSession(authConfig);
    const about = await getAboutAPI();

    return (
        <>
            <h1>{about?.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: (about?.text!) || 'test'}} />

        </>
    );
}