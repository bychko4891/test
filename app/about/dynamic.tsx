"use client";

import { ReactNode, useState } from "react";

export function ClientComponent({ children }: { children: ReactNode }) {
  const [count, setCounter] = useState(0);

  return (
    <div>
      Client component
      <div>
        Count: {count}
        <button
          onClick={() => {
            setCounter(count + 1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCounter(count - 1);
          }}
        >
          Remove
        </button>
      </div>
      {children}
    </div>
  );
}
