import React from "react";
import BlackWhiteThemeSwitcher from "@/components/constantLayout/header/BlackWhiteThemeSwitcher";
import {Notifications} from "@/components/constantLayout/header/Notifications";
import {UserGroup} from "@/components/constantLayout/header/UserGroup";
import {useSession} from "next-auth/react";
import {LoginButton} from "@/components/constantLayout/header/LoginButton";

export const RightGroup = () => {

    const session = useSession();
    // console.log(session);

    return (
        <ul className="navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0">
            <BlackWhiteThemeSwitcher />
            {session?.data && (<Notifications />) }
            {session?.data && (<UserGroup />) }
            {session?.data === undefined || session?.data === null  && (<LoginButton />) }


        </ul>
    );

};