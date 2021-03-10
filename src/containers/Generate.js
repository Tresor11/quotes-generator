import React, { useState } from "react";
const arr = ["damn", "woo", "hello", "more", "riseUp", "Godamn!"];
const Generate = () => {
  const [quotes, setQuotes] = useState(0);
  const handleS = () => {
    setQuotes(Math.round(Math.random() * 4));
  };
  return (
    <button
      type="button"
      onClick={handleS}
      className="bg-green-400 rounded-full p-1 shadow"
    >
      Generate New Quote
    </button>
  );
};

export default Generate;
