import React, { useContext } from "react";

import { PageContext } from "../context/PagesStateManager";

export default function ModuleButton({ value, count }) {
  const { setPage, moduleNumber, setModuleNumber } = useContext(PageContext);
  return (
    <>
      <input
        className="radioModule"
        type="radio"
        name="Module"
        id={`Module${count}`}
        value={value}
      />
      <label
        htmlFor={`Module${count}`}
        onClick={() => {
          setModuleNumber(count);
        }}
      >
        {value}
      </label>
    </>
  );
}
