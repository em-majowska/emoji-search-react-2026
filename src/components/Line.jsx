import React from "react";

const Line = (props) => {
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(props.emoji);
      }}>
      <span>{props.emoji}</span>
      <span>{props.name}</span>
      <span className="copy">Click to copy!</span>
    </button>
  );
};

export default Line;
