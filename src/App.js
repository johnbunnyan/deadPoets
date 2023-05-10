import "./styles.css";
import HanByul from "./pages/HanByul.js";
import Jisu from "./pages/kimJiSu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Btn = () => {
  return <button className="hiBtn">란녕하세용</button>;
};

function Jsx() {
  return (
    <>
      <h1 classname="deco">🫠🔥</h1>
      <p>
        야 이게 <br /> 칭의성이하구
      </p>
    </>
  );
}

let routes;
routes = (
  <Routes>
    <Route path="/" element={<Jsx />} />
    <Route path="/B" element={<HanByul />} />
    <Route path="/J" element={<Jisu />} />
  </Routes>
);

export default function App() {
  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}
