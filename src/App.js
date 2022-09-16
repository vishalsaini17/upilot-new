import { Button } from '@mui/material';
import { useThemeContext } from './configuration';

function App() {
  const { mode, toggleColorMode } = useThemeContext()
  return (
    <div className="App">
      {mode}
      <Button variant="contained" onClick={toggleColorMode}>
        change mode
      </Button>
    </div>
  );
}

export default App;
