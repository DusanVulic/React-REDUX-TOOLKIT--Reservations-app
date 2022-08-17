import { configureStore } from "@reduxjs/toolkit";

import ReservationReducer from "../features/reservationSlice";
import CustomerReducer from "../features/customerSlice";

export const store = configureStore({
    reducer: {
        reservations: ReservationReducer,
        customer: CustomerReducer,
    },
});