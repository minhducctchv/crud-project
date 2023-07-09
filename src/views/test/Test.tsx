import * as React from "react";
import { useCount } from "./use-count.ts";

export default function Test() {
  const [count, increment] = useCount();

  return (
    <div>
      <p>Count: {Number(count)}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
