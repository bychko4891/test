'use server';

import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import Image from "next/image";

export const UserPhoto = async () => {

    const session = await getServerSession(authConfig);
    const userAvatar = "/api/avatar/" + session?.user?.image || "#";

    return (
        <div className="user-photo-block overflow-visible">
            <img className="background-image" src="/images/profile_fone.jpg" alt="profile" />
            <img className="user-avatar" src={userAvatar} alt="profile" />
        </div>
    );
};