import React from "react";
import "./Loader.css";

const Loader = ({ loading }) => {
  return loading ? (
    // <div className="page-load-container">
    //   <div className="page-load"></div>
    //   <div className="load-text">
    //   <h1>Loading takes some time...</h1>
    //   </div>
    // </div>
    <div id="loading-wrapper">
  <div id="loading-text">LOADING</div>
  <div id="loading-content"></div>
</div>
  ) : null;
};
export default Loader;
