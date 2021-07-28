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

export const addNpc = (npc) => {
    return (dispatch) => {
        dispatch({ type: "ADDING_NPC"})
        let configObj = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(npc)
        }
        fetch('/npcs', configObj)
        .then(res => res.json())
        .then(npc => dispatch({
            type: 'NPC_ADDED',
            payload: npc
        }))
    }
}