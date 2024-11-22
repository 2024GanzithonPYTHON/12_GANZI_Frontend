// src/utils/route/Route.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Join from '../../pages/Join';
import Join2 from '../../pages/Join2';
import Join3 from '../../pages/Join3';
import Login from '../../pages/Login';
import Userinfo from '../../pages/Userinfo';
import StartPage from '../../pages/StartPage';


function RouteSetting() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join2" element={<Join2 />} />
      <Route path="/join3" element={<Join3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userinfo" element={<Userinfo />} />
    </Routes>
  );
}

export default RouteSetting;
