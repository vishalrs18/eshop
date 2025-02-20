import "./style.scss";
import { NavLink, Outlet } from "react-router";
import Path from "../UrlPath/Path";
// import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="app-header">
        <h2>
          <NavLink to={"/"}>E Shop</NavLink>
        </h2>
        <div>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Orders
          </NavLink>
        </div>
      </nav>
      <main className="main">
        <Path />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
