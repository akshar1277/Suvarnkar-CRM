import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./features/sidebarToggleSlice";

const store=configureStore({
    reducer:{
        sidebarToggle:sidebarToggleSlice,
    },
})

export default store;