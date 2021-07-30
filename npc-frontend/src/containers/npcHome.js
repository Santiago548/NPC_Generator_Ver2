import React, { Component } from "react";
import { connect } from "react-redux";
import NpcPreviewCard from "../components/npcPreviewCard";
import { deleteNpc, getNpcFullCard } from "../actions/npcs";

class NpcHome extends Component {

  handleclick = event => {
    this.props.getNpcFullCard(event.target.id)
  }


  render() {
    const { npcs, deleteNpc, getNpcFullCard } = this.props;
    const npc = npcs.filter((npc) => npc.id === this.props.id)
    
    return (
      <div>
        <hr className="hr-title" />
        <h2 className="app-title">| Npcs |</h2>
        <hr className="hr-title" />
        <div>
          <div>
            {npcs.map((npc) => (
              <NpcPreviewCard key={npc.id} deleteNpc={deleteNpc} npc={npc} getNpcFullCard={getNpcFullCard}/>
            ))}
          </div>
          <h2 className="app-title">| Npc |</h2>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    npcs: state.npcReducer.npcs,
    loading: state.npcReducer.loading
  };
};

export default connect(mapStateToProps, { deleteNpc, getNpcFullCard })(NpcHome);
