

export function authenticate(user){
    return {
        type: "AUTHENTICATE",
        user
    }
}



function reducer(state = {}, action){
    switch(action.type){
        case "AUTHENTICATE":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;
