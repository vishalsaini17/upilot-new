import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import "../SignIn/signIn.scss";

const SignUp = () => {
  return (
    <>

      <Typography variant="h3" sx={{ textAlign: 'center' }}>Sign Up</Typography>

      <Box component={`form`} sx={{ mt: 4, width: "400px" }}>


        <FormControl fullWidth sx={{ mb: 3 }} >
          <TextField type={`password`} placeholder="New Password" />

        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <TextField type={`password`} placeholder="Confirm Password" />
        </FormControl>

       
        <Box>
          <Button variant="contained" fullWidth>Submit</Button>
        </Box>

      </Box>

    </>
  );
}

export default SignUp;