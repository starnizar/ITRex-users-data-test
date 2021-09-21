import {GET_PAGES, HIDE_LOADER, SET_CURRENT_PAGE, SHOW_LOADER} from "./types";


const initialState = {
    pages: [],
    currentPage: 0,
    isLoading: true
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAGES:
            return {...state, pages: [...action.payload]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SHOW_LOADER:
            return {...state, isLoading: true}
        case HIDE_LOADER:
            return {...state, isLoading: false}
        default: return state
    }
}
