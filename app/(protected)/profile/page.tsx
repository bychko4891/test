"use server";

import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";


export default async function UserProfile() {

    const session = await getServerSession(authConfig);

    return (
        <>
            <h1>Profile</h1>

        </>
    );
}