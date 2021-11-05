import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Approutes";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter> 
    <Container maxWidth="lg">
      <Header/>
      <AppRoutes/>
    </Container>
    </BrowserRouter>
  );
};

export default App;
