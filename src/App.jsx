import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import Loader from "./components/Loader/Loader.jsx";

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;
