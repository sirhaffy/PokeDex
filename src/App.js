import React from "react";
import { render } from "react-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/pokemon/Dashboard";
import "./index.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Dashboard />

        <Footer />

      </div>
    );
  }
}
