import { Box } from '@mui/material';
import DrawerLeft from "./layouts/Nav/Nav";
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Box className="App">
      <AppRoutes />
      <DrawerLeft />
    </Box>
  );
}

export default App;
