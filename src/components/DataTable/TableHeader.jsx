import { Comment, SearchRounded, ViewWeekOutlined } from "@mui/icons-material";
import { Button, Checkbox, Fab, Grid, IconButton, InputAdornment, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, TextField } from "@mui/material";
import { useState } from "react";


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
        <Button variant="contained" size="small">Add new Contact</Button>
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

export default TableHeader;