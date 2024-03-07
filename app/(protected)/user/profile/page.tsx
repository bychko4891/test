"use server";

import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {LeftBlock} from "@/components/user/profile/LeftBlock";
import {RightBlock} from "@/components/user/profile/RightBlock";
import {getUserAPI} from "@/app/(protected)/user/profile/getUserAPI";


export default async function UserProfile() {

    const session = await getServerSession(authConfig);

    const userRemote = await getUserAPI();

    return (
        <div className="app-content-area row row-cols-1 row-cols-md-2 mx-auto">

            <LeftBlock />

            <RightBlock />

        </div>
    );
}