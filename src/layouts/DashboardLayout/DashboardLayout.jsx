import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Typography sx={{ textAlign: 'center' }}>Dashboard Layout</Typography>
      <Outlet />
    </>
  );
}

export default DashboardLayout;