import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
