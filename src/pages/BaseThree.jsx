import React, { useContext } from "react";

import SearchIcon from "../images/search-icon.png";
import MenuDots from "../images/menu-dots.png";

import TabButton from "../components/TabButton";
import TabContent from "../components/TabContent";

import { PageContext } from "../context/PagesStateManager";

export default function BaseThree() {
  const { moduleNumber, moduleNames, moduleInfo, tab, tabNames, setPage } =
    useContext(PageContext);

  return (
    <div className="base-three" style={{ display: "block" }}>
      <div className="topHeadMenu">
        <div className="topHeadLeft">
          <h3 className="module-name">{moduleNames[moduleNumber - 1]}</h3>
        </div>
        <div className="topHeadRight">
          <button
            className="searchIcon"
            onClick={() => {
              setPage("basefour");
            }}
          >
            <img src={SearchIcon} alt="Search Icon" />
          </button>
          <button
            className="HomePage"
            onClick={() => {
              setPage("baseone");
            }}
          >
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
      <TabContent
        h={moduleInfo[moduleNames[moduleNumber - 1]][tabNames[tab - 1]]["h"]}
        p={moduleInfo[moduleNames[moduleNumber - 1]][tabNames[tab - 1]]["p"]}
        img={
          moduleInfo[moduleNames[moduleNumber - 1]][tabNames[tab - 1]]["img"]
        }
        key={
          moduleInfo[moduleNames[moduleNumber - 1]][tabNames[tab - 1]]["img"]
        }
      />
    </div>
  );
}
