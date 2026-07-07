import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
