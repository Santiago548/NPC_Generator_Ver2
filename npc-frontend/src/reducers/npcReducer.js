export default (state = { npcs: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_NPCS":
      return {
        ...state,
        loading: true,
      };
    case "NPCS_LOADED":
      return {
        ...state,
        npcs: action.payload,
        loading: false,
      };

    case "LOADING_NPC":
      return {
        ...state,
        loading: true,
      };
    case "NPC_LOADED":
      return {
        ...state,
        npcs: [...state.npcs.filter((npc) => npc.id === parseInt(action.payload.id))],
        loading: false,
      };

    case "ADDING_NPC":
      return {
        ...state,
        loading: true,
      };
    case "NPC_ADDED":
      return {
        ...state,
        npcs: [...state.npcs, action.payload],
        loading: false,
      };

    case "DELETING_NPC":
      return {
        ...state,
        loading: true,
      };

    case "NPC_DELETED":
      return {
        ...state,
        npcs: [
          ...state.npcs.filter((npc) => npc.id !== parseInt(action.payload)),
        ],
        loading: false,
      };

    default:
      return state;
  }
};
