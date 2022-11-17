import React, { useContext } from "react";
import ModuleButton from "./ModuleButton";

import { PageContext } from "../context/PagesStateManager";

export default function BaseTwo() {
  const { setPage, moduleNames, moduleNumber } = useContext(PageContext);
  return (
    <div className="base-two" style={{ display: "block" }}>
      <ul className="module-list">
        {moduleNames.map((value, key) => {
          return (
            <li key={key}>
              <ModuleButton value={value} count={key + 1} />
            </li>
          );
        })}
      </ul>

      <button
        className="btn-module"
        id="selectModuleBtn"
        onClick={() => {
          if (moduleNumber === 0) {
            window.alert("Please select any Module..!");
          } else {
            setPage("basethree");
          }
        }}
      >
        Select Module
        <span className="right-arrow"></span>
      </button>
    </div>
  );
}
