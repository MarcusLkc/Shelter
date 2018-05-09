import React from "react";
import '../css/style.css';
import { Switch, Route } from "react-router-dom";
import About from "./About";
import CheckIn from "./CheckIn";
import MapContainer from "./MapContainer";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MapContainer} />
      <Route path="/check-in" component={CheckIn} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
);

export default Main;