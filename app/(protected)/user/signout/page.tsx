"use server";

import {SignOut} from "@/app/(protected)/jwtSessionService/SignOut";


export default async function UserSignOut() {

    // const session = await getServerSession(authConfig);


    return (
        <>
            <SignOut/>
        </>
    );
}