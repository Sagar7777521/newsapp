import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Newsitem from "./Components/Newsitem";

export default class extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar /> <News /> <Newsitem />
        </div>
      </div>
    );
  }
}
