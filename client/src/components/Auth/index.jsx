import { Avatar, Container, Grid, Paper, Typography, TextField} from "@material-ui/core";
import { LockOutlinedIcon } from "@material-ui/icons/LockOutlined";
import React from "react";
import useStyles from "./styles";

const Auth = () => {
  const styles = useStyles();
  const login = false;

  const handleSubmit = () => {
    return "";
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={styles.paper} elevation={2}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{login ? "Cadastre-se" : "Entrar"}</Typography>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
              {
                  login && (
                      <>
                      <TextField name="name" label="Nome" autoFocus xs={6}/>
                      <TextField name="sname" label="Sobrenome" autoFocus xs={6}/>
                      </>
                  )
              }
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
