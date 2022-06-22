import React, { useState } from "react";
import PDFPrinter from "./PDFPrinter";

const ControlPanel = (props) => {
  const { file, pageNumber, numPages, setPageNumber, scale, setScale } = props;
  const [toggle, setToggle] = useState(true);
  const [lang, setlang] = useState("");

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  const showForm = () => {
    props.themeHandler(!toggle);
    setToggle(!toggle);
  };

  const handleSelect = (e) => {
    props.langHandler(e.target.value);
    setlang(e.target.value);
  };

  return (
    <div className="control-panel m-3 p-3 d-flex align-items-baseline justify-content-between">
      <div className="d-flex justify-content-between align-items-baseline">
        <button className="button" onClick={showForm}>
          {toggle ? "Dark Theme" : "Light Theme"}
        </button>
        <label>Language: </label>
        <select value={lang} style={{ width: "40%" }} onChange={handleSelect}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
          <option value="Gujrati">Gujrati</option>
          <option value="Telugu">Telugu</option>
        </select>
      </div>
      <div className="d-flex justify-content-between align-items-baseline">
        <i
          className={`fas fa-search-minus mx-3 ${zoomOutClass}`}
          onClick={zoomOut}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <i
          className={`fas fa-search-plus mx-3 ${zoomInClass}`}
          onClick={zoomIn}
        />
      </div>
      <div className="mx-3">
        <a
          href="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
          download={true}
          title="download"
        >
          <i className="fas fa-file-download clickable" />
        </a>
      </div>
    </div>
  );
};

export default ControlPanel;
