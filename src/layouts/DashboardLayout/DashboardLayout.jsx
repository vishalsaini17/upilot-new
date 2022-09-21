import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ px: ['15px', '20px', '30px', '60px'], pb: ['15px', '20px', '30px', '60px'], pt: [5]}}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardLayout;