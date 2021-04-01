import React, { useState } from "react";
const arr = ["damn", "woo", "hello", "more", "riseUp", "Godamn!"];
const Generate = () => {
  const [quotes, setQuotes] = useState(0);
  const loadMore = () => {
    setQuotes(Math.round(Math.random() * 4));
  };
  return (
    <button
      type="button"
      onClick={loadMore}
      className="bg-green-400 rounded-full p-1 shadow"
    >
      View more
    </button>
  );
};

export default Generate;
