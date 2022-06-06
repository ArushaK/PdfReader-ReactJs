import React, { useState } from 'react';
import Loader from './Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(1.5);
  const [toggle, setToggle] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess() {
    // setNumPages(numPages);
    setIsLoading(false);
  }

  function toggleHandler(data){
    setToggle(data)
  }

  return (
    <div>
      <Loader isLoading={isLoading} />
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          themeHandler={toggleHandler}
          file="/assets/docs/file-sample.pdf"
        />
{toggle && <Document
          file="/assets/docs/file-sample.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {[1,2,3].map(page => (
            <Page pageNumber={page} scale={scale}/>
        ))}
          {/* <Page scale={scale} /> */}
        </Document>}

        
      </section>
    </div>
  );
};

export default PDFReader;
