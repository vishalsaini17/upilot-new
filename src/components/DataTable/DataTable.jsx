import { Comment, SearchRounded, ViewWeekOutlined } from "@mui/icons-material";
import { Box, Button, Checkbox, Fab, Grid, IconButton, InputAdornment, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";


const DataTable = ({ columns = [], rows = [] }) => {
  return (
    <Box>
      <TableHeader />
      <Box sx={{
        height: '600px',
        '& .custom-row': {
          boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)',
          mb: '5px',

          '& .custom-column': {
            borderTopColor: 'transparent'
          }
        },
        '& .even-row': {
          backgroundColor: 'rgba(225,223,246,0.15)',
          // mb: '5px',
          '&:hover': {
            backgroundColor: 'rgba(225,223,246,0.34)',
          }
        },

        '& .odd-row': {
          backgroundColor: 'rgba(225,223,246,0.22)',
          // mb: '5px',
          '&:hover': {
            backgroundColor: 'rgba(225,223,246,0.34)',
          }
        },

        '& .MuiDataGrid-cell:not(.custom-column)': {
          borderColor: 'transparent'
        }
      }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          getRowClassName={({ indexRelativeToCurrentPage }) => `custom-row ${indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row'}`}
          getCellClassName={() => `custom-column`}
          checkboxSelection
          showCellRightBorder
          hideFooter
        />
      </Box>
    </Box>
  );
}

export default DataTable;

const TableHeader = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid container columnSpacing={1} alignItems="center" sx={{ mb: 2 }}>
      <Grid item xs>
        <Button variant="contained">Add new Contact</Button>
      </Grid>
      <Grid item>
        <TextField
          id="table-search"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          placeholder="Search in view"
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>,
          }}
        />
      </Grid>
      <Grid item>
        <Fab aria-describedby={id} color="primary" size="small" onClick={handleClick} >
          <ViewWeekOutlined />
        </Fab>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <Comment />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Line item text`} />
            </ListItemButton>
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <Comment />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Line item text`} />
            </ListItemButton>
          </ListItem>

        </Popover>
      </Grid>
    </Grid>
  )
}