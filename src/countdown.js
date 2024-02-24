import { useState } from 'react';

export default function Countdown() {
  const [count, setCount] = useState(100);

  function handleClick() {
    setCount(count - 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}
