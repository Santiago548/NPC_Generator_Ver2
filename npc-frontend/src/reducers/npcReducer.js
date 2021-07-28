import { bindActionCreators } from "redux";

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

    default:
      return state;
  }
};
