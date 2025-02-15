import { configureStore } from '@reduxjs/toolkit'
import updateAdminReducer from './slices/adminSlice'

const store = configureStore({
    reducer: {
        updateAdminData: updateAdminReducer
    },
})

export default store