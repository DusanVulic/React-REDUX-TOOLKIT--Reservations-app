import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from "./components/ReservationCard";
//ispod je metod iz reservation slice
import { addReservation } from "./features/reservationSlice";

function App() {
  const reservations = useSelector((state) => state.reservations.value);

  console.log(reservations);

  const [reservationNameInput, setReservationNameInput] = useState("");

  const handleAddReservations = () => {
    if (!reservationNameInput) {
      return;
    }

    addReservation();
    console.log("kliknuto");
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <h3>REDUX-TOOLKIT </h3>
      <p>learning project </p>
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header"> Restaurant Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation) => {
                const { id } = reservation;
                return <ReservationCard key={id} name={reservation.name} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
