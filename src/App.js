/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Placar } from "./pages/Placar";
import { Players } from "./pages/Players";

function App() {
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/players");
    }
  }, []);

  // useEffect(() => {}, []);

  return (
    <>
      <Routes>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/placar" element={<Placar />}></Route>
      </Routes>
    </>
  );
}

export default App;
