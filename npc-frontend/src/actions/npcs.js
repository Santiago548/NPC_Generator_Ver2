export const getNpcs = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_NPCS"})
        fetch('/npcs')
        .then(res => res.json())
        .then(npcs => dispatch({
            type:  "NPCS_LOADED",
            payload: npcs
        }))
    }
}