import React from "react";

const Try = ({ el, i }) => {
  return (
    <>
      <li>
        <div>횟수: {i + 1}</div>
        <div>{el}</div>
      </li>
    </>
  );
};

export default Try;
