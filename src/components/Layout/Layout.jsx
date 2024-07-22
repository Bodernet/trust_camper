import { Suspense } from "react";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../Loader/Loader.jsx";

const Layout = () => {
  return (
    <div>
      <div className={css.header}>
        <Navigation />
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            marginTop: "45px",
          },
        }}
      />
    </div>
  );
};

export default Layout;
