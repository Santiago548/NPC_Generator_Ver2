import React, { Component } from "react";
import { connect } from "react-redux";
import NpcPreviewCard from "../components/npcPreviewCard";
import { deleteNpc } from "../actions/npcs";

class NpcHome extends Component {
 
  render() {
    const { npcs, deleteNpc, getNpcFullCard } = this.props;
    const npc = npcs.filter((npc) => npc.id === this.props.id);

    return (
      <div className="npc-container">
        <div className="npc-list">
          <h2>| Npcs |</h2>
          <hr />
          {npcs.map((npc) => (
            <NpcPreviewCard key={npc.id} deleteNpc={deleteNpc} npc={npc} getNpcFullCard={getNpcFullCard}/>
          ))}
        </div>
        <div className="npc-full-card">
          <h2 className="app-title">| Npc |</h2>
        </div>
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

export default connect(mapStateToProps, { deleteNpc })(NpcHome);
