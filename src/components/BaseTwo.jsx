import React, { useContext } from "react";
import Module from "./Module";

import { PageContext } from "../context/PagesStateManager";

export default function BaseTwo() {
  const moduleNames = [
    "Module One",
    "Module Two",
    "Module Three",
    "Module Four",
    "Module Five",
  ];

  const { setPage } = useContext(PageContext);
  return (
    <div className="base-two" style={{ display: "block" }}>
      <ul className="module-list">
        {moduleNames.map((value, key) => {
          return (
            <li key={key}>
              <Module value={value} count={key + 1} />
            </li>
          );
        })}
      </ul>

      <button
        className="btn-module"
        id="selectModuleBtn"
        onClick={() => {
          setPage("basetthree");
        }}
      >
        Select Module
        <span className="right-arrow"></span>
      </button>
    </div>
  );
}
