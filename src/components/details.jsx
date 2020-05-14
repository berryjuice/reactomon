import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./navbar";

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
      res.data.forms.map((e) => {
        this.setState({
          name: e.name,
        });
        this.setState({ img: res.data.sprites.back_shiny });
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* <h1>Base experience:</h1>
        <h4>{this.state.base_experience}</h4> */}
        {/* <h1>Abilities:</h1>
        {this.state.abilityNames.map((name) => (
          <li key={name}>{name}</li>
        ))} */}
        <h1
          className="badge m-2 badge-primary"
          style={{ marginLeft: "20px", fontSize: 36 }}
        >
          {this.state.name}
        </h1>
        <div>
          <img src={this.state.img} height="150 px"></img>
        </div>
        <h1 style={{ marginLeft: "20px" }}>Types:</h1>
        {this.state.types.map((t) => (
          <li style={{ marginLeft: "20px" }} key={t}>
            {t}
          </li>
        ))}
      </div>
    );
  }
}

export default Details;
