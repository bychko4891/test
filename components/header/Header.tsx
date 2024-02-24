'use client'

import React, {ReactNode} from "react";
import {LogoMobile} from "./LogoMobile";
import { BurgerIco } from "./BurgerIco";



export const Header = ({ children, onClick }:{children: ReactNode, onClick: any } ) => {
    return (
        <header>
            <div className="header">
                <div className="navbar-custom navbar navbar-expand-lg">
                    <div className="container-fluid px-0">
                        <BurgerIco onClick={ onClick } />
                        {/*<LogoMobile/>*/}
                        { children }
                    </div>
                </div>
            </div>
        </header>
    );
};