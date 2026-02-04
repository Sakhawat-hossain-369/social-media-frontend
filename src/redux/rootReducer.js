import { combineReducers } from "@reduxjs/toolkit";
import accountsReducer, { profileReducer } from "./accounts/reducer";

const rootReducer = combineReducers({
    accounts: accountsReducer,
    profile: profileReducer,
})

export default rootReducer;