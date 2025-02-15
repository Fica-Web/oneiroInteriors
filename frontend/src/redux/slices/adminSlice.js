import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminInfo: null,
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        set_credentials: (state, action) => {
            state.adminInfo = action.payload;
        },
        clear_credentials: (state) => {
            state.adminInfo = null;
        },
        update_admin_data: (state, action) => {
            if (state.adminInfo) {
                console.log('state:', state)
                state.adminInfo = action.payload;
            }
        },
    },
});

export const { set_credentials, clear_credentials, update_admin_data } = adminSlice.actions;

export default adminSlice.reducer;