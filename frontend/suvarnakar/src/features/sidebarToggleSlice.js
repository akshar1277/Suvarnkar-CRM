import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isSidebarToggled:true
}

const sidebarToggleSlice=createSlice({
    name:"sidebarToggle",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.isSidebarToggled = !state.isSidebarToggled;
        },
    }
});

export const { toggleSidebar } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;
