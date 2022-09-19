import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import DrawerLeft from "../../components/Nav/Nav";

const DashboardLayout = () => {
  return (
    <Box sx={{ px: ['15px', '20px', '30px', '60px'], pb: ['15px', '20px', '30px', '60px'], pt: { xs: '60px', md: '80px' } }}>
       <DrawerLeft />
      <Outlet />
    </Box>
  );
}

export default DashboardLayout;