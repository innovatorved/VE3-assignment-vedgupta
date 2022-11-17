import React, { useContext } from "react";

import { PageContext } from "../context/PagesStateManager";

export default function TabButton({ value, count }) {
  const { tab, setTab } = useContext(PageContext);
  return (
    <a
      className={`nav-item nav-link ${count === tab ? "active" : ""}`}
      id={`nav-tab${count}`}
      data-toggle="tab"
      role="tab"
      aria-selected={count === tab ? "true" : "false"}
      onClick={() => {
        setTab(count);
      }}
    >
      {value}
    </a>
  );
}
