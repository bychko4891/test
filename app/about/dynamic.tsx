"use client";

import { ReactNode, useState } from "react";

export function ClientComponent({ children }: { children: ReactNode }) {
  const [count, setCounet] = useState(0);

  return (
    <div>
      Client component
      <div>
        Count: {count}
        <button
          onClick={() => {
            setCounet(count + 1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCounet(count - 1);
          }}
        >
          Remove
        </button>
      </div>
      {children}
    </div>
  );
}
