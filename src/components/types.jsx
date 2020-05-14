import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./navbar";

class Types extends Component {
  state = {
    pokemonTypes: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      this.setState({
        pokemonTypes: res.data.results,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ marginLeft: "20px" }}>Types</h1>
        {this.state.pokemonTypes.map((pokemonType) => (
          <li style={{ marginLeft: "20px" }}>{pokemonType.name}</li>
        ))}
      </div>
    );
  }
}

export default Types;
