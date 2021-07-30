import React, { Component } from "react";
import { connect } from "react-redux";
import NpcPreviewCard from "../components/npcPreviewCard";
import { deleteNpc } from "../actions/npcs";

class NpcHome extends Component {
  render() {
    const { npcs, deleteNpc } = this.props;
    return (
      <div>
        <hr className="hr-title" />
        <h2 className="app-title">| Npcs |</h2>
        <hr className="hr-title" />
        <div>
          <div>
            {npcs.map((npc) => (
              <NpcPreviewCard key={npc.id} deleteNpc={deleteNpc} npc={npc} />
            ))}
          </div>
          <h2 className="app-title">| Npc |</h2>
          <div>
          </div>
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
