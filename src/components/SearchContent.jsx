import React from "react";

export default function SearchContent({ h, p, img }) {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div id="inner-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-5 col-xs-8">
              <img src={`/images/${img}`} alt="" className="img-data" />
            </div>
            <div className="col-lg-5 col-md-4 col-sm-4 col-xs-8">
              <h1 className="head-data">{h}</h1>
              <p className="description-data">{p}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
