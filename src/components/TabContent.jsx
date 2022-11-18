import React from "react";

export default function TabContent({ h, p, img }) {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane active show"
        id="nav-tab-three"
        role="tabpanel"
        aria-labelledby="nav-tab3"
      >
        <div id="inner-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-sm-5 col-xs-12">
                <img src={`/images/${img}`} alt="" className="img-data" />
              </div>
              <div className="col-lg-6 col-md-7 col-sm-7 col-xs-12">
                <h1 className="head-data">{h}</h1>
                <p className="description-data">{p}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
