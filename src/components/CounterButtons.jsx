import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButtons({ setCount, count }) {
  return (
    <>
      <div className="button-container">
        <button
          className="count-btn"
          onClick={() => setCount(prev => Math.max(0, prev - 1))}
          disabled={count <= 0}
        >
          <MinusIcon className="count-btn-icon" />
        </button>
        <button
          className="count-btn"
          onClick={() => setCount(prev => Math.min(5, prev + 1))}
          disabled={count >= 5}
        >
          <PlusIcon className="count-btn-icon" />
        </button>
      </div>
    </>
  );
}