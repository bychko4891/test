'use client'

import {Header} from "@/components/header/Header";
import {SideBar} from "@/components/sidebar/SideBar";
import {ReactNode, useState} from "react";

export function StaticLayout({children}: { children: ReactNode }) {

    const [isMainWrapperActive, setIsMainWrapperActive] = useState(false);

    async function handleClick() {
        setIsMainWrapperActive(!isMainWrapperActive);
        // mainWrapperClasses = mainWrapperClasses + isMainWrapperActive ? ' toggled' : 'toggled'
        // const data = await sendForm();
        // console.log(data + ' data!!!');
        console.log(isMainWrapperActive + ' isMain');
    }
    // let mainWrapperClasses = 'main-wrapper ';
    const mainWrapperClasses = isMainWrapperActive ? 'main-wrapper' : 'main-wrapper toggled';
    console.log(mainWrapperClasses + ' class!!');

    return (

        <div id="main-wrapper3" className={mainWrapperClasses}>
            <Header onClick={ handleClick }></Header>
            <SideBar/>
            {children}

        </div>

    );
}