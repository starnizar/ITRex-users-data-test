import {GET_PAGES, HIDE_LOADER, SELECT_USER, SET_CURRENT_PAGE, SET_USERS, SHOW_LOADER} from "./types";

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        payload: user
    }
}

export const getPages = (pages) => {
    return {
        type: GET_PAGES,
        payload: pages
    }
}

export const setPage = (pageNum) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNum
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}
