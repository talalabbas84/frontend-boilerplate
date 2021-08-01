import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar/index";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {}, []);
  return (
    <Flex h="100vh" w="100vw" direction="column">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Flex>
  );
}

export default App;
