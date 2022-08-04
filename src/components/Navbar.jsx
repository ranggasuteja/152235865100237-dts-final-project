import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keluarDariAplikasi } from "../authentication/firebase";
import LoginIcon from '@mui/icons-material/Login';
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariAplikasi();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar sx={{ background: "rgb(27, 112, 101)" }} position="sticky">
        <Toolbar sx={{ width: "90%", margin: "0 5% 0 5%" }}>
          <Typography variant="h6" component="div" className={styles.grow}>
            CuAHN! - Cuaca Apa Hari Ni
          </Typography>

          <Button color="inherit" onClick={buttonLogoutOnClickHandler}><LoginIcon style={{ marginRight: '0.6rem', fontSize: 'x-large'}} />
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
