import Home from "./Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Birthday from "./Components/pages/Birthday";
import Camp from "./Components/pages/Camp";
import RidingTraining from "./Components/pages/RidingTraining";
import NavigationBar from "./Components/navBar/NavigationBar";
import horseBackgrounf from "./assets/horseBackground.jpg";
import MeetFarm from "./Components/meetFarm/MeetFarm";

function App() {
  return (
    // <div style={{ backgroundImage: `url(${horseBackgrounf})` }}>
    <div>
      <Routes>
        <Route element={<NavigationBar />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/birthdayParty" element={<Birthday />} />
          <Route path="/camp" element={<Camp />} />
          <Route path="/farmInfo" element={<MeetFarm />} />
          <Route path="/ridingTraining" element={<RidingTraining />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
