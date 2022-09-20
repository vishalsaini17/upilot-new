import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <Box>
       {/* <DrawerLeft /> */}
       <Navbar />
      {/* <Outlet /> */}
    </Box>
  );
}

export default DashboardLayout;
// sx={{ px: ['15px', '20px', '30px', '60px'], pb: ['15px', '20px', '30px', '60px'], pt: { xs: '60px', md: '80px' } }}