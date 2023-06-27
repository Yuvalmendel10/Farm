import Home from "./Home";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import Birthday from "./Components/pages/Birthday";
import { useEffect } from "react";

// const navigate = useNavigate();

// useEffect(() => {
//   console.log("111");
// }, [name]);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page" element={<Birthday />} />
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
