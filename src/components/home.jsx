import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          <Link to="/pokemons">Pokemons</Link>
        </p>
        <p>
          <Link to="/types">Types</Link>
        </p>
      </div>
    );
  }
}

export default Home;
