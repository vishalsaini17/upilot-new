import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

const SignIn = () => {
  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>Sign In</Typography>

      <Box component={`form`} sx={{mt: 4}}>
        <FormControl fullWidth sx={{mb: 3}} >
          <TextField type={`email`} placeholder="Email" />
        </FormControl>
        <FormControl fullWidth sx={{mb: 3}}>
          <TextField type={`password`} placeholder="password" />
        </FormControl>

        <Box>
          <Button variant="contained" fullWidth>Submit</Button>
        </Box>

      </Box>

    </>
  );
}

export default SignIn;