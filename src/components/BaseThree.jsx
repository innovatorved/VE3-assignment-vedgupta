import React, { useContext } from "react";

import SearchIcon from "../images/search-icon.png";
import MenuDots from "../images/menu-dots.png";

import TabButton from "../components/TabButton";

import { PageContext } from "../context/PagesStateManager";

export default function BaseThree() {
  const { moduleNumber, tab, tabNames } = useContext(PageContext);

  return (
    <div className="base-three" style={{ display: "block" }}>
      <div className="topHeadMenu">
        <div className="topHeadLeft">
          <h3 className="module-name">Module Five</h3>
        </div>
        <div className="topHeadRight">
          <button className="searchIcon">
            <img src={SearchIcon} alt="Search Icon" />
          </button>
          <button className="HomePage">
            <img src={MenuDots} alt="Home" />
          </button>
        </div>
      </div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab">
          {tabNames.map((value, key) => {
            return <TabButton value={value} count={key + 1} key={key} />;
          })}
        </div>
      </nav>
    </div>
  );
}
