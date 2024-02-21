"use server";

import { ClientComponent } from "./dynamic";


export async function ServerComponent() {
  console.log("use server");

  return <div>Static HTML</div>;
}

export default async function About() {
  // const data = await fetch("https://some.com");

  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}
