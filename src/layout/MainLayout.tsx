import { AppBar, Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column"}}>
      <AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}>
        <Header />
      </AppBar>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};

export default MainLayout;
