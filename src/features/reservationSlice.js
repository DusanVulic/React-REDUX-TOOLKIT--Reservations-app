import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, actions) => {},
    },
});

export default reservationSlice.reducer;