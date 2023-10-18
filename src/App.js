import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import Bollywood from "./pages/Bollywood";
import Hollywood from "./pages/Hollywood";
import Technology from "./pages/Technology";
import Fitness from "./pages/Fitness";
import Food from "./pages/Food";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/bollywood">Bollywood</NavLink>
        <NavLink to="/technology">Technology</NavLink>
        <NavLink to="/hollywood">Hollywood</NavLink>
        <NavLink to="/fitness">Fitness</NavLink>
        <NavLink to="/food">Food</NavLink>

        <Routes>
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
