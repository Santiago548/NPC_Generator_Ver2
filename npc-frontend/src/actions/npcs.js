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
        dispatch({ type: "ADDING_NPC" })
        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(npc) 
        }
        fetch('/npcs', configObj)
        .then(res => res.json())
        .then(npc => dispatch({
            type: "CHARACTER_ADDED",
            payload: npc
        }))
    }
}

export const deleteNpc = (id) => {
    return (dispatch) => {
        dispatch({ type: "DELETING_NPC"})
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            } 
        }
        fetch(`/npcs/${id}`, configObj)
        .then(() => dispatch({
            type: "NPC_DELETED",
            payload: id
        }))
    }    
}