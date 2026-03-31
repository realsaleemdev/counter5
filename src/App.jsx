import { useState } from "react";
import Counter from "./components/counter";
import CounterButtons from "./components/CounterButtons";
import Reset from "./components/Reset";
import Title from "./components/Title";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <div className="card">
          <Title />
          <Counter count={count} />
          <Reset setCount={setCount}/>
          <CounterButtons count={count} setCount={setCount} />
        </div>
      </main>
    </>
  );
}