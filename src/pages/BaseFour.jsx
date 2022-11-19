import React, { useContext, useState, useEffect } from "react";
import SearchContent from "../components/SearchContent";

import { PageContext } from "../context/PagesStateManager";

import HomeLight from "../images/home-light.png";
import LeftButton from "../images/back-button.png";
import RightButton from "../images/right-button.png";

export default function BaseFour() {
  const { setPage, ArrayForFilter, PAGES } = useContext(PageContext);
  const [search, setSearch] = useState("");
  const [filterArray, setFilterArray] = useState([]);

  const [countResult, setCountResult] = useState(0);
  const [pagecount, setpagecount] = useState(1);

  useEffect(() => {
    if (search === "") {
      // if no value in search bar then return from useEfffect
      setCountResult(0);
      return;
    }

    // Filter results for display
    let temp = ArrayForFilter.filter((item) => {
      return item["h"].toLowerCase().includes(search.toLowerCase());
    });
    setCountResult(temp.length);
    setFilterArray(temp);
  }, [search, ArrayForFilter]);

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
                    setPage(PAGES.ONE);
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
                    if ((pagecount - 1) * 2 <= key && pagecount * 2 > key) {
                      return (
                        <SearchContent
                          key={key}
                          h={item["h"]}
                          p={item["p"]}
                          img={item["img"]}
                        />
                      );
                    }
                    return <div key={key}></div>;
                  })}
                </>
              )}
              <button className="search-arrow-button">
                <img
                  src={LeftButton}
                  alt="left button"
                  onClick={() => {
                    if (pagecount > 1) {
                      setpagecount(pagecount - 1);
                    }
                  }}
                />
                <img
                  src={RightButton}
                  alt="right button"
                  onClick={() => {
                    if (pagecount >= 1 && pagecount * 2 < countResult) {
                      setpagecount(pagecount + 1);
                    }
                  }}
                />
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
