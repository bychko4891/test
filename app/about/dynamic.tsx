"use client";

import { ReactNode } from "react";
import { sendForm } from "./sendForm";

export function ClientComponent({ children }: { children: ReactNode }) {
  async function handleClick() {
    const data = await sendForm();
    console.log(data);
  }

  return (
    <div id="main-wrapper" className="class">
      <button onClick={handleClick}>Send form</button>
    </div>
  );
}
