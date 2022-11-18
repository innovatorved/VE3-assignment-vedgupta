import React, { useContext } from "react";

import { PageContext } from "../context/PagesStateManager";

import MenuBotsWhite from "../images/menu-dots-white.png";

export default function BaseFour() {
  const { setPage } = useContext(PageContext);
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
                  <img src={MenuBotsWhite} alt="Home" />
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
              />
            </div>
          </div>
          <div className="searchResults">
            <div className="alert alert-light" role="alert" id="countResults">
              Showing 0 results...
            </div>
            <div
              className="list-group d-flex flex-row flex-wrap"
              id="listGroupList"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
