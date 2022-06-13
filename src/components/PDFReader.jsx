import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
import pdf from "../therect_marathi.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(0.7);
  const [toggle, setToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState(" ");

  function onDocumentLoadSuccess() {
    // setNumPages(numPages);
    setIsLoading(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function toggleHandler(data) {
    setToggle(data);
  }
  function langHandler(data) {
    setLang(data);
  }

  return (
    <div>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <section
          id="pdf-section"
          className="d-flex flex-column align-items-center w-100"
        >
          <ControlPanel
            scale={scale}
            setScale={setScale}
            themeHandler={toggleHandler}
            langHandler={langHandler}
            file="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
          />

          {toggle && lang === "Marathi" && (
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              {[1].map((page) => (
                <Page pageNumber={page} scale={scale} />
              ))}
              {/* <Page scale={scale} /> */}
            </Document>
          )}
        </section>
      )}
    </div>
  );
};

export default PDFReader;
