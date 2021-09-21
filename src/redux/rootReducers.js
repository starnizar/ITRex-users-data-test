import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {appReducer} from "./appReducer";


export const rootReducers = combineReducers({
    users: usersReducer,
    app: appReducer
})
