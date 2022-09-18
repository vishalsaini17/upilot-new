import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import * as React from 'react';


export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked OnChange={handleChange} />} label="Remember Me" />
     
    </FormGroup>
  );
}
