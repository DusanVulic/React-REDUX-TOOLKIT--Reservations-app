import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {},
});

//exportujem akcije
export const {} = customerSlice.actions;

///exportujem reducer
export default customerSlice.reducer;