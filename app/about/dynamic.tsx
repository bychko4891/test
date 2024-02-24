'use client'

import {ReactNode, useState} from "react";
import { sendForm } from "./sendForm";
import {Button} from "@/app/about/Button";
import {SideBar} from "@/components/sidebar/SideBar";

export function ClientComponent({ children }: { children: ReactNode }) {

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
    <div id="main-wrapper1234" className={mainWrapperClasses}>
      {/*<button onClick={handleClick}>Send form</button>*/}
      <Button onClick={handleClick} />
      <SideBar />
      { children }
    </div>
  );
}
