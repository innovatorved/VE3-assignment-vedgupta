import React, { useContext } from "react";

import BaseOne from "./BaseOne";
import BaseTwo from "./BaseTwo";
import BaseThree from "./BaseThree";
import BaseFour from "./BaseFour";

import Loader from "../components/Loader";

import { PageContext } from "../context/PagesStateManager";

export default function Homepage() {
  const { page, loader } = useContext(PageContext);
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
            <div className="intro-text-container">
              {page === "baseone" ? <BaseOne /> : <></>}
              {page === "basetwo" ? <BaseTwo /> : <></>}
              {page === "basethree" ? <BaseThree /> : <></>}
              {page === "basefour" ? <BaseFour /> : <></>}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
      {loader === true ? <Loader /> : <></>}
    </>
  );
}
