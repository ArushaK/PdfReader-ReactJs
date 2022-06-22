import React from 'react'
import { useLocation } from "react-router-dom";
import PDFReader from '../components/PDFReader';

const Thrivenow = () => {
  const sampleLocation = useLocation();
  let url = sampleLocation.pathname;
  return (
    <main>
      <PDFReader url={url} />
    </main>
  );
}

export default Thrivenow