import { configureStore } from "@reduxjs/toolkit";

import ReservationReducer from "../features/reservationSLice";

export const store = configureStore({
    reducer: { reservations: ReservationReducer },
});