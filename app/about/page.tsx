"use server";

import {ClientComponent} from "./dynamic";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {getAboutAPI} from "@/app/about/getAboutAPI";
import {fetchWithToken} from "@/app/fetchWithToken";

type Resp = {
    name:string;
    text: string;
}

export async function ServerComponent() {
    // console.log("use server");

    return <div>Static HTML</div>;
}

export default async function About() {
    // const tr:Response = await fetchWithToken("http://localhost:8080/api/about", {method: "GET"});
    // console.log(tr + ' tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr tr ');
    // const aboutPage = (await tr.json()) as Resp;

    const session = await getServerSession(authConfig);
    const about = await getAboutAPI();

    // console.log(about?.text);

    // console.log(session?.user || " no user ");
    return (
        <>
            <h1>{about?.name}</h1>
            {/*<h1>{aboutPage?.name}</h1>*/}
            <div dangerouslySetInnerHTML={{ __html: (about?.text!) || 'test'}} />
            {/*<ClientComponent>*/}
            {/*    <ServerComponent/>*/}
            {/*</ClientComponent>*/}
        </>
    );
}