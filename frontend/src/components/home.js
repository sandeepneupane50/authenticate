import { useNavigate } from "react-router-dom";
import React from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
      const theme = useTheme();
   
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return ( 
        <>
            <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained" onClick={handleLogout} >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
        </>
        
     );
}
 
export default Home;
