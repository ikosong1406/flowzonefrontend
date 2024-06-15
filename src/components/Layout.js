import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";
import Header from "./Header";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "gainsboro" }}>
      <Header />
      <div style={{ display: "flex", marginTop: 20, paddingBottom: 10 }}>
        <Sidebar />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
