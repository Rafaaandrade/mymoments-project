import { Typography, AppBar, Toolbar, Avatar, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  const styles = useStyles();
  const user = null;

  return (
    <AppBar className={styles.appBar} position="static" color="inherit">
      <div className={styles.container}>
        <Typography
          component={Link}
          to="/"
          className={styles.header}
          variant="h2"
          align="center"
        >
          Momentos
        </Typography>
      </div>
      <Toolbar className={styles.toolbar}>
        {user ? (
          <div className={styles.profile}>
            <Avatar
              className={styles.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={styles.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={styles.logout}
              color="secondary"
            >
              Sair
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
