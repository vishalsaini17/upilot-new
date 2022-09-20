import { Box, Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from '../../assets/img/upilot_logo.png';

const AuthScreenLayout = () => {
  return (
    <Box component={`main`} data-component={`AuthScreenLayout`} sx={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', alignContent: 'center' }}>
      <Box component={`header`} sx={{ width: '100%' }}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
              <Box sx={{ textAlign: 'center', px: [8, 8, 9], pt: '34px' }}>
                <Box component={`img`} alt="UPilot Logo" src={logo} sx={{ width: '100%', maxWidth: '183px'}} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={`section`} sx={{ width: '100%', mt: [5, '6%', '5%', '4%', '3%'] }}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={5} lg={4} xl={3} >
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default AuthScreenLayout;