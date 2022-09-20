import { AccountCircleRounded, AddCircleRounded, BusinessCenterRounded, InfoRounded, MarkEmailUnreadRounded, SettingsSharp } from "@mui/icons-material";
import { Divider, Grid, Link } from "@mui/material";
import React from "react";
import img from "../../assets/img/brand_logo.png";
import "./Navbar.css";


export default function Navbar(){

return(

  <nav className="nav-wrapper">
    <Grid xs="12" md="12" className="nav-top" container spacing={3} columns={12}>
    <Grid item xs="4" className='add-bg'> <AddCircleRounded className='add-btn' /> 
    
    
    </Grid>
    <Grid item xs="3" sx={{textAlign:"center"}}>  <img src={img} width="110px" height="38px" alt="" /> </Grid>
    <Grid item xs="5" className="notification">
    <Link className="icon"> <MarkEmailUnreadRounded /> </Link>
    <Link className="icon"> <BusinessCenterRounded /></Link>
    <Link className="icon"> <InfoRounded />  </Link>
    <Divider />
    <Link className="icon"> <SettingsSharp />    </Link>
    <Divider />
    <Link className="icon"> <AccountCircleRounded />  </Link>


      
     </Grid>
    </Grid>
  </nav>

  
)

}