import {SELECT_USER, SET_USERS} from "./types";

const initialState = {
    users: [],
    selectedUser: {}
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.payload]}
        case SELECT_USER:
            return {...state, selectedUser: {...action.payload}}
        default: return state
    }
}
