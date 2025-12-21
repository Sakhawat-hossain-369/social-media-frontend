import { combineReducers } from "@reduxjs/toolkit";
import accountsReducer from "./accounts/reducer";

const rootReducer = combineReducers({
    accounts: accountsReducer,
})

export default rootReducer;