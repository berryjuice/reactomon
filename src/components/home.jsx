import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default Home;
