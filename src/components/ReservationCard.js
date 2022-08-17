import React from "react";

import { useDispatch } from "react-redux";

import { removeReservation } from "../features/reservationSlice";

const ReservationCard = ({ name, id }) => {
  const dispatch = useDispatch();

  const removeReservationHandler = (id) => {
    console.log("klik za brisanje");
    dispatch(removeReservation(id));
  };

  return (
    <div className="reservation-card-container">
      <h4>{name} </h4>
      <button onClick={() => removeReservationHandler(id)}>X</button>
    </div>
  );
};

export default ReservationCard;
