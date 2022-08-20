import { useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);

  return (
    <p>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </p>
  );
}
