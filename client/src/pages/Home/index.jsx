import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "../../components/Posts";
import Form from "../../components/Form";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";



const Home = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit" >
        <Typography className={styles.header} variant="h2" align="center">
          Memorias
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
