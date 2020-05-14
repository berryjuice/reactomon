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
        <img
          src="https://kep.cdn.index.hu/1/0/1224/12244/122447/12244797_468307_4aed9913b1db88617e8fc19623cb96f6_wm.jpg"
          className="img-fluid rounded mx-auto d-block w-50 p-5"
        ></img>
      </div>
    );
  }
}

export default Home;
