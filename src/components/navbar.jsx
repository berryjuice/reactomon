import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light fixed-top sticky-top">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/">Home</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/pokemons">Pokemons</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/types">Types</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
