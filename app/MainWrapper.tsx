"use client";

import { ReactNode } from "react";

export function Layout() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}

export function ClientComponent({ children }: { children: ReactNode }) {
  return (
    <div id="main-wrapper" className="class">
      {children}
    </div>
  );
}

function ServerComponent() {
  return <div>Server Component</div>;
}
