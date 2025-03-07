import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./slices/adminSlice";
import companyReducer from './slices/companySlice';

const rootReducer = combineReducers({
    adminData: adminReducer,
    companyInfo: companyReducer
})

export default rootReducer;