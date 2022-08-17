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
        removeReservation: (state, action) => {
            //prvo kreiram novi array
            const newReservations = state.value.filter(
                (reservation) => reservation.id !== action.payload
            );
            state.value = newReservations;
        },
    },
});

//exportujem akcije
export const { addReservation, removeReservation } = reservationSlice.actions;

///exportujem reducer
export default reservationSlice.reducer;