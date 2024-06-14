import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
