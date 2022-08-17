import React from "react";

import { useDispatch } from "react-redux";

//import method  from first slice
import { removeReservation } from "../features/reservationSlice";
//import method from the second slice
import { addCustomer } from "../features/customerSlice";

const ReservationCard = ({ name, id }) => {
  const dispatch = useDispatch();

  const removeReservationHandler = (id) => {
    console.log("reservation removed");
    dispatch(removeReservation(id));
  };

  const confirmReservationHandler = (id) => {
    console.log("confirm reservation");
    // sa prvim  dispatcujem da mi ukloni iz pending invitations
    dispatch(removeReservation(id));
    // sa drugim dispetchujem da ga prebaci u drugi state
    dispatch(addCustomer({ name, id, food: [] }));
  };

  return (
    <div className="reservation-card-container">
      <h4>{name} </h4>
      <button onClick={() => removeReservationHandler(id)}>
        remove reservation
      </button>
      <button onClick={() => confirmReservationHandler(id)}>
        confirm reservation
      </button>
    </div>
  );
};

export default ReservationCard;
