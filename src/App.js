import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home";
import Pokemons from "./components/pokemons";
import Types from "./components/types";
import Details from "./components/details";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Route path="/pokemons" component={Pokemons}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/types" component={Types}></Route>
        <Route exact path="/pokemon/:id" component={Details}></Route>
      </Router>
    );
  }
}

export default App;
