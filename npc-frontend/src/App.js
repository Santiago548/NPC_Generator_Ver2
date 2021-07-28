import React, { Component } from "react";
import { connect } from "react-redux";
import { getNpcs, addNpc, deleteNpc } from './actions/npcs'
import "./App.css";
import NpcRandom from "./containers/npcRandom";

class App extends Component {

  componentDidMount() {
    this.props.getNpcs()
  }

  handleclick = event => {
    this.props.deleteNpc(event.target.id)
  }


  render() {
    const npcs = this.props.npcs.map((npc) => <li key={npc.id}> {npc.firstName}<button onClick={() => deleteNpc(npc.id)} id={npc.id}>X</button></li>)
    
    return (
      <div className="App">
        <h1>NPC's</h1>
        <hr />
        <ul>
          {this.props.loading ? <h4>...Loading NPC's</h4> : npcs }
        </ul>
        <NpcRandom />
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
export default connect(mapStateToProps, { getNpcs, addNpc })(App);
