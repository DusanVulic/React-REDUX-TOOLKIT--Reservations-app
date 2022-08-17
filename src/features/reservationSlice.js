import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [{ name: "Dusan Vulic", id: 1 }],
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