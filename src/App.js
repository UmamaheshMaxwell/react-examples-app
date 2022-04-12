import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer'
import './App.css';
import PdfDocument from './1.generate-pdf/generateInvoice/Invoice'
import InvoiceData from './1.generate-pdf/jsonData/InvoiceData'

function App() {
  const fileName = 'Invoice.pdf'
  return (
    <div className="App">
      <PDFViewer >
        <PdfDocument invoicedata = {InvoiceData} />
      </PDFViewer>

      <div className="download-link">
        <PDFDownloadLink document={<PdfDocument invoicedata ={InvoiceData} />} 
                         fileName={fileName}
        >
          {
            ({blob, url, loading, error}) => loading ? "Loading..."
                                                     : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
    </div>

  );
}

export default App;
