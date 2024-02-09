"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function TestPDF() {
  const [file, setFile] = useState(
    "/bseindia/bseplus/AnnualReport/532540/68468532540_25_05_21.pdf"
  );
  return (
    <div className="pt-9 absolute z-0 ">
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
