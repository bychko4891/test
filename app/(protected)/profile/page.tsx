"use server";

import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";


export async function ServerComponent() {
    // console.log("use server");

    return <div>Static HTML</div>;
}

export default async function UserProfile() {

    const session = await getServerSession(authConfig);
    // const about = await getAboutAPI();
    // console.log(about?.text);

    // console.log(session?.user || " no user ");
    return (
        <>
            <h1>Profile</h1>
            {/*<h1>{about?.name}</h1>*/}
            {/*<div dangerouslySetInnerHTML={{ __html: (about?.text!) || 'test'}} />*/}
            {/*<ClientComponent>*/}
            {/*    <ServerComponent/>*/}
            {/*</ClientComponent>*/}
        </>
    );
}