import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

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
        <Link to="/">Home</Link> | <Link to="/pokemons">Pokemons</Link>
        {this.state.pokemonTypes.map((pokemonType) => (
          <li>{pokemonType.name}</li>
        ))}
      </div>
    );
  }
}

export default Types;
