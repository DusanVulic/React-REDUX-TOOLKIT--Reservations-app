import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

//exportujem akcije
export const { addReservation } = reservationSlice.actions;

///exportujem reducer
export default reservationSlice.reducer;