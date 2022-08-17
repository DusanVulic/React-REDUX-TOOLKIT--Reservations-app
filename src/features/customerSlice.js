import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

//exportujem akcije
export const { addCustomer } = customerSlice.actions;

///exportujem reducer
export default customerSlice.reducer;