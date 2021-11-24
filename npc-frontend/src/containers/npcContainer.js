import { connect } from "react-redux";
import React, { Component } from "react";
import NpcRandom from "./npcRandom";
import NpcHome from "./npcHome";

class NpcContainer extends Component {

  render() {
    return (
    <div>
        <NpcRandom />
        <br />
        {this.props.loading ? <h5>Loading Npcs...</h5> : <NpcHome />}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    npcs: state.npcReducer.characters,
    loading: state.npcReducer.loading,
  };
};

export default connect(mapStateToProps)(NpcContainer);
