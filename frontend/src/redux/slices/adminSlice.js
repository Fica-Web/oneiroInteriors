import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: {
        username: 'ajmal',
        email: '',

    }
}

export const updateAdminSlice = createSlice({
    name: 'updateAdmin',
    initialState,
    reducers: {
        updade_admin_data: (state, action) => {

        }
    }
})

export const { updade_admin_data } = updateAdminSlice.actions

export default updateAdminSlice.reducer