import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import DSA from "./pages/DSA";
import OperatingSystems from "./pages/OperatingSystems";
import DBMS from "./pages/DBMS";
import ComputerNetworks from "./pages/ComputerNetworks";
import SystemDesign from "./pages/SystemDesign";
import OOPs from "./pages/OOPs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/profile/:userId" element={<ProfilePage />} /> */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/data-structures-and-algorithms" element={<DSA />} />
        <Route path="/Operating-systems" element={<OperatingSystems />} />
        <Route path="/database-management-systems" element={<DBMS />} />

        <Route path="/computer-networks" element={<ComputerNetworks />} />

        <Route path="/computer-organization-architecture" element={<SystemDesign />} />
        <Route path="/object-oriented-programming" element={<OOPs />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
