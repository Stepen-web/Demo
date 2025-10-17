import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialServiceApp from "./social-service-pwa";
import AdminPanel from "./AdminPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialServiceApp />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}