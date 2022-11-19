import React, { useContext } from "react";

import { PageContext } from "../context/PagesStateManager";

export default function BaseOne() {
  const { setPage, PAGES } = useContext(PageContext);
  return (
    <div className="base-one">
      <h1>Fusce sem magna pharetra cursus</h1>
      <p>
        Morbi tincidunt nisi id vulputate consequat. Morbi arcu libero,
        pellentesque eu bibendum non, eleifend ut nisi. Phasellus mattis nibh
        ullamcorper euismod sodales. Donec metus eros, euismod dapibus fermentum
        non, gravida id ex. Duis vitae dui sit amet lectus ultrices lacinia eget
        in tellus. Vivamus lacinia lectus id justo fermentum tincidunt. Duis
        consectetur porttitor tincidunt. Sed dapibus nulla vitae risus elementum
        dictum.
      </p>
      <button
        className="btn-module base-one-btn"
        onClick={() => {
          setPage(PAGES.TWO);
        }}
      >
        Enter
        <span className="right-arrow"></span>
      </button>
    </div>
  );
}
