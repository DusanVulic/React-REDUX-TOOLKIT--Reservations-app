import { configureStore } from "@reduxjs/toolkit";

import ReservationReducer from "../features/reservationSlice";

export const store = configureStore({
    reducer: {
        reservations: ReservationReducer,
    },
});