import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* <Route path="/paper" element={<IndexPaper />} /> */}
    </Routes>
  </Router>
);
