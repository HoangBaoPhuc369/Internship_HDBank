import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="" style={{ height: "100%" }}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
