"use server";

import { ClientComponent } from "./dynamic";


export async function ServerComponent() {
  console.log("use server");

  return <div>Static HTML</div>;
}

export default async function About() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}
