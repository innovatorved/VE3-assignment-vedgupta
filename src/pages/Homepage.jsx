import React, { useContext } from "react";

import BaseOne from "../components/BaseOne";
import BaseTwo from "../components/BaseTwo";
import BaseThree from "../components/BaseThree";

import { PageContext } from "../context/PagesStateManager";

export default function Homepage() {
  const { page } = useContext(PageContext);
  return (
    <section id="module-container" className="">
      <div className="container">
        <div className="row">
          <div className="intro-text-container">
            {page === "baseone" ? <BaseOne /> : <></>}
            {page === "basetwo" ? <BaseTwo /> : <></>}
            {page === "basethree" ? <BaseThree /> : <></>}
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </section>
  );
}
