import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyInfo: null,
};

export const companySlice = createSlice({
    name: "companyInfo",
    initialState,
    reducers: {
        set_company_info: (state, action) => {
            state.companyInfo = action.payload;
        },
    },
});

export const { set_company_info } = companySlice.actions;
export default companySlice.reducer;