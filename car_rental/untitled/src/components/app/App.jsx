import { Route, Routes, Navigate } from "react-router-dom";
import React, { lazy } from "react";

const Home = lazy(() => import("../../pages/home/Home"));
const Catalog = lazy(() => import("../../pages/catalog/Catalog"));
const Favorites = lazy(() => import("../../pages/favorites/Favorites"));

import AppBar from "../appBar/AppBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
