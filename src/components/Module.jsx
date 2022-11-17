import React from "react";

export default function Module({ value, count }) {
  return (
    <>
      <input
        className="radioModule"
        type="radio"
        name="Module"
        id={`Module${count}`}
        value={value}
      />
      <label htmlFor={`Module${count}`}>{value}</label>
    </>
  );
}
