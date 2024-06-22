import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contacts from "./pages/Contacts"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Gallery/" element={<Gallery />} />
        <Route path="Projects/" element={<Projects />} />
        <Route path="Certifications/" element={<Certifications />} />
        <Route path="Contacts/" element={<Contacts />} />
      </Routes>
    </div>
  );
};
export default App;
