import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useThemeContext } from '../../configuration';
import "./style.css";
import { columns, rowsData } from "./table.option";



const SystemDesign = () => {
  const { themeMode, toggleColorMode } = useThemeContext()

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'right' }}> {themeMode} :- <Button onClick={toggleColorMode}>Change Theme</Button> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item><Button variant="contained" size="small" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="contained" size="small" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="contained" size="small" color="success">success</Button></Grid>
        <Grid item><Button variant="contained" size="small" color="error">error</Button></Grid>
        <Grid item><Button variant="contained" size="small" color="info">info</Button></Grid>
        <Grid item><Button variant="contained" size="small" color="warning">warning</Button></Grid>

        <Grid item><Button variant="outlined" size="small" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="outlined" size="small" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="outlined" size="small" color="success">success</Button></Grid>
        <Grid item><Button variant="outlined" size="small" color="error">error</Button></Grid>
        <Grid item><Button variant="outlined" size="small" color="info">info</Button></Grid>
        <Grid item><Button variant="outlined" size="small" color="warning">warning</Button></Grid>

        <Grid item><Button variant="text" size="small" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="text" size="small" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="text" size="small" color="success">success</Button></Grid>
        <Grid item><Button variant="text" size="small" color="error">error</Button></Grid>
        <Grid item><Button variant="text" size="small" color="info">info</Button></Grid>
        <Grid item><Button variant="text" size="small" color="warning">warning</Button></Grid>

        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item><Button variant="contained" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="contained" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="contained" color="success">success</Button></Grid>
        <Grid item><Button variant="contained" color="error">error</Button></Grid>
        <Grid item><Button variant="contained" color="info">info</Button></Grid>
        <Grid item><Button variant="contained" color="warning">warning</Button></Grid>

        <Grid item><Button variant="outlined" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="outlined" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="outlined" color="success">success</Button></Grid>
        <Grid item><Button variant="outlined" color="error">error</Button></Grid>
        <Grid item><Button variant="outlined" color="info">info</Button></Grid>
        <Grid item><Button variant="outlined" color="warning">warning</Button></Grid>

        <Grid item><Button variant="text" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="text" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="text" color="success">success</Button></Grid>
        <Grid item><Button variant="text" color="error">error</Button></Grid>
        <Grid item><Button variant="text" color="info">info</Button></Grid>
        <Grid item><Button variant="text" color="warning">warning</Button></Grid>

        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item><Button variant="contained" size="large" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="contained" size="large" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="contained" size="large" color="success">success</Button></Grid>
        <Grid item><Button variant="contained" size="large" color="error">error</Button></Grid>
        <Grid item><Button variant="contained" size="large" color="info">info</Button></Grid>
        <Grid item><Button variant="contained" size="large" color="warning">warning</Button></Grid>

        <Grid item><Button variant="outlined" size="large" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="outlined" size="large" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="outlined" size="large" color="success">success</Button></Grid>
        <Grid item><Button variant="outlined" size="large" color="error">error</Button></Grid>
        <Grid item><Button variant="outlined" size="large" color="info">info</Button></Grid>
        <Grid item><Button variant="outlined" size="large" color="warning">warning</Button></Grid>

        <Grid item><Button variant="text" size="large" color="primary">Primary</Button></Grid>
        <Grid item><Button variant="text" size="large" color="secondary">secondary</Button></Grid>
        <Grid item><Button variant="text" size="large" color="success">success</Button></Grid>
        <Grid item><Button variant="text" size="large" color="error">error</Button></Grid>
        <Grid item><Button variant="text" size="large" color="info">info</Button></Grid>
        <Grid item><Button variant="text" size="large" color="warning">warning</Button></Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>

        <Grid item xs={12}>
          <Typography variant="h1" component={`h1`}>this is heading 1</Typography>
          <Typography variant="h2" component={`h2`}>this is heading 2</Typography>
          <Typography variant="h3" component={`h3`}>this is heading 3</Typography>
          <Typography variant="h4" component={`h4`}>this is heading 4</Typography>
          <Typography variant="h5" component={`h5`}>this is heading 5</Typography>
          <Typography variant="h6" component={`h6`}>this is heading 6</Typography>
        </Grid>
        <Grid item xs={12}> <Divider /> </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" >this is subtitle 1</Typography>
          <Typography variant="subtitle2" >this is subtitle 2</Typography>
        </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iusto.</Typography>
          <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem!</Typography>
          <Typography variant="overline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem!</Typography>
          <br />
          <Typography variant="caption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem!</Typography>
        </Grid>

        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>
        <Grid item xs={12}> <Divider /> </Grid>

        <Grid item xs={12} >

          <Grid item xs={12}>
          <Grid item md={6}>   <Grid item><Button variant="contained" color="primary">Add New Contact</Button></Grid></Grid>
          <Grid item md={6}></Grid>
        
          </Grid>
          
       
          <Box sx={{
            height: '400px',
            '& .bg-even': {
              backgroundColor: 'rgba(225,223,246,0.15)',
              boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)',
              mb: '5px',
              '&:hover': {
                backgroundColor: 'rgba(225,223,246,0.34)',
                boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)',
              }
            },

            '& .bg-odd': {
              backgroundColor: 'rgba(225,223,246,0.22)',
              boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)',
              mb: '5px',
              '&:hover': {
                backgroundColor: 'rgba(225,223,246,0.34)',
                boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)',
              }
            }
          }}>
            <DataGrid columns={columns} rows={rowsData}
              checkboxSelection
              getRowClassName={({ indexRelativeToCurrentPage }) => indexRelativeToCurrentPage % 2 === 0 ? `bg-even` : 'bg-odd'}
            />
          </Box>
        </Grid>

        <Grid item xs={12}> <Divider /> </Grid>

      </Grid>
    </Box>
  );
}

export default SystemDesign;