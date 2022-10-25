import { Home } from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Welcome } from "./Components/Home/Welcome";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Router key={location.pathname} location={location}>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
