import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout/Layout.jsx";
import { useDispatch } from "react-redux";
import { getPickups } from "./redux/pickups/operations.js";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const Favorites = lazy(() => import("./pages/Favorite/Favorite.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPickups());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage to="/" replace />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
