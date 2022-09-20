import { Box, Button, FormControl, Link, TextField, Typography } from "@mui/material";
import CheckBox from "../../../components/CheckBox/CheckBox";
import "./signIn.scss";


const SignIn = () => {

  return (
    <>

      <Typography variant="h3" sx={{ textAlign: 'center' }}>Sign In</Typography>

      <Box component={`form`} sx={{ mt: 4, width: "400px" }}>


        <FormControl fullWidth sx={{ mb: '10px' }} >
          <TextField type={`email`} placeholder="Email" />

        </FormControl>
        <FormControl fullWidth sx={{ mb: '10px' }}>
          <TextField type={`password`} placeholder="password" />
        </FormControl>

        <CheckBox  />
        <Box>
          <Button variant="contained" size="large" fullWidth>SUBMIT</Button>
        </Box>
        <Link className='forget-pwd' sx={{ textDecoration: "none", textAlign: "center" }} to="/forgot-password"> <p > Forgot Your Password? </p></Link>

      </Box>
    </>
  );
}

export default SignIn;