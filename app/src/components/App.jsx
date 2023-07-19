import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <>
      <h1 className="bg-green-200 flex justify-center text-4xl">
        My Golf Tracker
      </h1>

      <Navigation />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
