"use server";

import {LogoMobile} from "@/components/header/LogoMobile";
import {BurgerIco} from "@/components/header/BurgerIco";
import { useState } from "react";

export const Header = ({onClick}: {onClick: () => void}) => {
    return (
        <header>
            <div className="header">
                <div className="navbar-custom navbar navbar-expand-lg">
                    <div className="container-fluid px-0">
                        <BurgerIco onClick={onClick}/>
                        <LogoMobile/>
                    </div>
                </div>
            </div>
        </header>
    );
};
