import React, { useContext, useState, useEffect } from "react";
import SearchContent from "../components/SearchContent";

import { PageContext } from "../context/PagesStateManager";

import HomeLight from "../images/home-light.png";

export default function BaseFour() {
  const { setPage, moduleInfo } = useContext(PageContext);
  const [search, setSearch] = useState("");
  const [filterArray, setFilterArray] = useState([]);

  const [countResult, setCountResult] = useState(0);

  useEffect(() => {
    if (search === "") {
      setCountResult(0);
      return;
    }

    let temparr = [];
    Object.keys(moduleInfo).map((module, module_index) => {
      Object.keys(moduleInfo[module]).map((tab, tab_index) => {
        temparr.push(moduleInfo[module][tab]);
      });
    });
    let temp = temparr.filter((item) => {
      return item["h"].toLowerCase().includes(search.toLowerCase());
    });
    setCountResult(temp.length);
    setFilterArray(temp);
  }, [search]);

  return (
    <div className="base-four" style={{ display: "block" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="searchHead">
            <div className="topHeadMenu">
              <div className="topHeadLeft">
                <h1>Type here to search</h1>
              </div>
              <div className="topHeadRight">
                <button
                  className="HomePage"
                  onClick={() => {
                    setPage("baseone");
                  }}
                >
                  <img src={HomeLight} alt="Home" />
                </button>
              </div>
            </div>

            <div className="form-group">
              <input
                className="searchInput form-control"
                type="text"
                id="searchModule"
                name="searchModule"
                placeholder="type text and press enter..."
                value={search}
                onChange={(e) => {
                  e.preventDefault();
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="searchResults">
            <div className="alert alert-light" role="alert" id="countResults">
              Showing {countResult} results...
            </div>
            <div
              className="list-group d-flex flex-row flex-wrap"
              id="listGroupList"
            ></div>
            <div
              className="search-content"
              style={{ display: `${countResult === 0 ? "none" : "block"}` }}
            >
              {search === "" ? (
                <></>
              ) : (
                <>
                  {filterArray.map((item, key) => {
                    return (
                      <SearchContent
                        key={key}
                        h={item["h"]}
                        p={item["p"]}
                        img={item["img"]}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
