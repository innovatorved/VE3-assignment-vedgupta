import React, { useContext } from "react";

import BaseOne from "./BaseOne";
import BaseTwo from "./BaseTwo";
import BaseThree from "./BaseThree";
import BaseFour from "./BaseFour";

import Loader from "../components/Loader";

import { PageContext } from "../context/PagesStateManager";

export default function Homepage() {
  const { page, loader, PAGES } = useContext(PageContext);

  const SHOW_PAGE = (page) => {
    /**
     * @param page pagename you want to render like - (baseone , basetwo , ..)
     */
    if (page === PAGES.ONE) {
      return <BaseOne />;
    } else if (page === PAGES.TWO) {
      return <BaseTwo />;
    } else if (page === PAGES.THREE) {
      return <BaseThree />;
    } else if (page === PAGES.FOUR) {
      return <BaseFour />;
    } else {
      return <BaseOne />;
    }
  };

  return (
    <>
      <section
        id="module-container"
        className={`${page === "basethree" ? "tab-stage" : ""} ${
          page === "basefour" ? "search-stage" : ""
        }`}
        style={{
          display: `${loader === false ? "block" : "none"}`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="intro-text-container">{SHOW_PAGE(page)}</div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
      {loader === true ? <Loader /> : <></>}
    </>
  );
}
