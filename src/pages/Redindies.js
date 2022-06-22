import React from 'react'
import { useLocation } from "react-router-dom";
import PDFReader from '../components/PDFReader';

const Redindies = () => {
  const sampleLocation = useLocation();
  let url = sampleLocation.pathname;
  console.log(url)
  return (
    <main>
      <PDFReader url={url} />
    </main>
  );
}

export default Redindies