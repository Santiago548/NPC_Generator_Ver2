import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getNpcs, deleteNpc, getNpcFullCard } from "./actions/npcs";
import NpcContainer from "./containers/npcContainer";
import Navigation from "./components/Navigation";
import { About } from "./components/about"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.getNpcs();
  }

  handleclick = (event) => {
    this.props.deleteNpc(event.target.id);
  };

  handleclick = (event) => {
    this.props.getNpcFullCard(event.target.id);
  }

  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <h1>NPC GENERATOR Ver2</h1>
          <Switch>
            <Route exact path="/" component={NpcContainer} />
            <Route exact path="/about" component={About} />
          </Switch>
          <hr />
         
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    npcs: state.npcReducer.npcs,
    loading: state.npcReducer.loading,
  };
};
export default connect(mapStateToProps, { getNpcs, deleteNpc, getNpcFullCard })(App);
