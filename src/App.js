import React from "react";
import Login from "./components/layouts/login";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import SignUp from "./components/layouts/signUp.jsx";
import EditNote from "./components/editNote";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/note:id?" component={EditNote} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/signup" component={SignUp} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
