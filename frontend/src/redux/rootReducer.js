import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./slices/adminSlice";

const rootReducer = combineReducers({
    adminData: adminReducer
})

export default rootReducer;