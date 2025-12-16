import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/pages/Home/home";
import AboutPage from "../Components/pages/About/about";
import ContactPage from "../Components/pages/Contact/contact";
import Collections from "../Components/pages/Collection/collection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collections" element={<Collections />} />
    </Routes>
  );
};

export default AppRoutes;
