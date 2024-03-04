'use client'

import {ReactNode, useState} from "react";
import { sendForm } from "./sendForm";
import {Button} from "@/app/about/Button";
import {SideBar} from "@/components/constantLayout/sidebar/SideBar";

export function ClientComponent({ children }: { children: ReactNode }) {


  async function handleClick() {
    // const data = await sendForm();
    // console.log(data + ' data!!!');
  }


  return (
    <div id="main-wrapper1234">
      <button onClick={handleClick}>Send form</button>
      {/*<Button onClick={handleClick} />*/}

      { children }
    </div>
  );
}
