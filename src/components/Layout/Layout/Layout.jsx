import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <p>Layout page</p>
      <Header />

      <Outlet />
    </>
  );
};

export default Layout;
