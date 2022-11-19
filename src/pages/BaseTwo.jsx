import React, { useContext } from "react";
import ModuleButton from "../components/ModuleButton";

import { PageContext } from "../context/PagesStateManager";

export default function BaseTwo() {
  const { setPage, PAGES, moduleNames, moduleNumber, setLoader } =
    useContext(PageContext);
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
          // Go two third  page
          if (moduleNumber === 0) {
            window.alert("Please select any Module..!");
          } else {
            setLoader(true);
            setPage(PAGES.THREE);
            setTimeout(() => {
              setLoader(false);
            }, 500);
          }
        }}
      >
        Select Module
        <span className="right-arrow"></span>
      </button>
    </div>
  );
}
