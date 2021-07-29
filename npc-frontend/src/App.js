import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getNpcs, deleteNpc } from './actions/npcs'
import NpcContainer from "./containers/npcContainer";
class App extends Component {

  componentDidMount() {
    this.props.getNpcs()
  }

  handleclick = event => {
    this.props.deleteNpc(event.target.id)
  }

  render() {
    
    return (
      <div className="App">
        <h1>NPC's</h1>
        <hr />
        <NpcContainer />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    npcs: state.npcReducer.npcs,
    loading: state.npcReducer.loading,
  };
};
export default connect(mapStateToProps, { getNpcs, deleteNpc })(App);
