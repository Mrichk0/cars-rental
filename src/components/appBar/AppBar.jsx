import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Loader from "../loader/Loader";

import style from "./appBar.module.scss";

function AppBar() {
  return (
    <>
      <header className={style.header}>
        <NavLink to="/" className={style.link}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={style.link}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={style.link}>
          Favorite
        </NavLink>
      </header>
      <Suspense fallback={<Loader />}>
        <main className="container">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}

export default AppBar;
