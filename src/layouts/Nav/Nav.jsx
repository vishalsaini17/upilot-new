
import { AddCircleRounded, CloseRounded, ContactPageRounded, SimCardDownloadRounded } from "@mui/icons-material";
import { Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Typography, useTheme } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import { useState } from "react";
import img from "../../assets/img/brand_logo.png";


import "./Nav.css";
const drawerWidth = 280 ,
 drawerHeight = 290


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleDrawerRightOpen = () => {
  //   setOpen(true);
  // }
  // const handleDrawerRightClose = () => {
  //   setOpen(false);
  // }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar >
          <div className='add-bg'>
          <AddCircleRounded className='add-btn'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 3, ...(open && { display: 'none' }) }}>
            
          </AddCircleRounded>
          </div>
         
          <Typography variant="h6" noWrap component="div">
            <img src={img} width="110px" height="38px" alt="" />
          </Typography>

          {/* <AddCircleRoundedIcon className='add-btn'
            aria-label="open drawer"
            onClick={handleDrawerRightOpen}
            edge="end"
            sx={{ mr: 3, ...(open && { display: 'none' }) }}>
            
          </AddCircleRoundedIcon> */}


        </Toolbar>
      </AppBar>
      <Drawer
      
        sx={{
          width: drawerWidth,
          height : drawerHeight,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            height : drawerHeight,
            boxSizing: 'border-box',
            background:"#FFF",
            color:"#ccc",
            borderRadius:"6px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{justifyContent:"space-between"}}>
          <span> Add in UPilot:</span>
          <IconButton  sx={{color:"#ccc"}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseRounded /> : <CloseRounded />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='drawer-cover' >
          {['Add New Contact', 'Add New Deal', 'Add New Task', 'Import Data'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:"#ccc"}}>
                  {index % 2 === 0 ? <ContactPageRounded /> : <SimCardDownloadRounded />  }
                </ListItemIcon>

                {/* <ListItemIcon sx={{color:"#ccc"}}>
                  {index % 2 === 0 ? <EventAvailableRoundedIcon/> : <HomeRepairServiceRoundedIcon />  }
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerRightClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      
      </Drawer> */}
      <Main open={open}>
        
      </Main>
    </Box>
  );
}

