import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';


export default function IndeterminateCheckbox() {
  const [checked, setChecked] = useState([true, false]);

  const handleChange = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked onChange={handleChange} />} label="Remember Me" />

    </FormGroup>
  );
}
