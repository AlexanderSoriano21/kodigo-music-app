import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import Registrarse from "./Screens/Registrarse.jsx"
import Premium from "./Screens/Premium.jsx"

function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/premium" />} />
          {/* replace se usa para reemplazar la entrada actual en el stack de navegación */}
          <Route path="/premium" element={<Premium/>} />
          <Route path="/registrarse" element={<Registrarse/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
