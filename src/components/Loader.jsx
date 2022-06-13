import React from "react";
import gif from "../gifs/5.gif";
//import spash from "../gifs/splash.jpg";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div
      id="loader"
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <img src={gif} alt="loader" className="mb-5 App-logo" />
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Loader;
