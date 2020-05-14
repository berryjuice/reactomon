import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Details extends Component {
  state = { types: [] };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      let tempTypes = [];
      res.data.types.map((t) => {
        tempTypes.push(t.type.name);
      });
      this.setState({ types: tempTypes });
    });
  }

  render() {
    return (
      <div>
        <Link to="/pokemons">Pokemons</Link>
        {/* <h1>Base experience:</h1>
        <h4>{this.state.base_experience}</h4> */}
        {/* <h1>Abilities:</h1>
        {this.state.abilityNames.map((name) => (
          <li key={name}>{name}</li>
        ))} */}
        <h1>Types:</h1>
        {this.state.types.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </div>
    );
  }
}

export default Details;
