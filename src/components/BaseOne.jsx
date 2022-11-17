import React, { useContext } from "react";

import { PageContext } from "../context/PagesStateManager";

export default function BaseOne() {
  const { setPage } = useContext(PageContext);
  return (
    <div className="base-one">
      <h1>Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi sit
        eaque, exercitationem praesentium ad nulla quasi ratione distinctio
        repellat, omnis debitis veritatis neque dolorem officia ut aliquip ex ea
        commodo consequat.
      </p>
      <button
        className="btn-module base-one-btn"
        onClick={() => {
          setPage("basetwo");
        }}
      >
        Select Module
        <span className="right-arrow"></span>
      </button>
    </div>
  );
}
