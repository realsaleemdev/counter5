import { useState } from "react";

export default function Counter({ count }) {
  // let count = 10

  return (
    <>
      <p className="count">{count}</p>
    </>
  );
}