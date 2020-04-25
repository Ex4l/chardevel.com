import React from "react";

export const newline = (text: string): JSX.Element[] => {
  return text.split("\n").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });
};
