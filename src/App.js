import { Route, Routes } from "react-router-dom";
import "./App.css";
import PDFReader from "./components/PDFReader";
import Home from "./pages/Home";
import Redindies from "./pages/Redindies";
import Thrivenow from "./pages/Thrivenow";
import LayoutPage from "./pages/LayoutPage";

function App() {
  return (
    <div className="App">
      {/* <PDFReader /> */}
      <LayoutPage>
      <main>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/redindies" element={<Redindies />} exact />
              <Route path="/thrivenow" element={<Thrivenow />} exact />
            </Routes>
          </main>
          </LayoutPage>
    </div>
  );
}

export default App;
