import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
