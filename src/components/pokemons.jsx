import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";

class Pokemons extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000").then((res) => {
      this.setState({
        pokemons: res.data.results,
      });
      this.setState(
        this.state.pokemons.map((pokemon) => {
          pokemon.id = pokemon.url.substring(34, pokemon.url.length - 1);
        })
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ marginLeft: "20px" }}>Pokemons</h1>
        {this.state.pokemons.map((pokemon) => (
          <div>
            <li style={{ marginLeft: "20px" }}>
              <Link to={`pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default Pokemons;
