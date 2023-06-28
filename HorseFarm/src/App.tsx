import Home from "./Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Birthday from "./Components/pages/Birthday";
import Camp from "./Components/pages/Camp";
import RidingTraining from "./Components/pages/RidingTraining";
import NavBar from "./Components/navBar/NavBar";

function App() {
  return (
    <div>
      <Routes>
        <NavBar />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/birthdayParty" element={<Birthday />} />
        <Route path="/camp" element={<Camp />} />
        <Route path="/ridingTraining" element={<RidingTraining />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
