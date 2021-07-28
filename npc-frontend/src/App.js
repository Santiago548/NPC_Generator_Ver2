import React, { Component } from "react";
import { connect } from "react-redux";
import { getNpcs } from './actions/npcs'
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.getNpcs()
  }


  render() {
    const npcs = this.props.npcs.map((npc, i) => <li key={i}>{npc.firstName}<button id={npc.id}>X</button></li>)
    return (
      <div className="App">
        <h1>NPC's</h1>
        <hr />
        <ul>
          {this.props.loading ? <h4>...Loading NPC's</h4> : npcs }
        </ul>
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
export default connect(mapStateToProps, { getNpcs })(App);
