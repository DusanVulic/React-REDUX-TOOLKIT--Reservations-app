import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";
//ispod je metod iz reservation slice
import { addReservation } from "./features/reservationSlice";

function App() {
  // mora biti isto ime kao i u state !!!
  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customers.value);

  console.log(reservations);

  const [reservationNameInput, setReservationNameInput] = useState("");

  /// pozivam dispatch kako bih mogao koristiti metodu iz slice koju koristim
  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) {
      return;
    }
    // vrapujem dispatch-om metodu iz slice kako bih je mogao koristiti
    dispatch(
      addReservation({
        name: reservationNameInput,
        id: new Date().getTime().toString(),
      })
    );
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
                return (
                  <ReservationCard
                    key={id}
                    name={reservation.name}
                    id={reservation.id}
                  />
                );
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
          {customers.map((customer) => {
            const { id } = customer;
            return <CustomerCard key={id} {...customer} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
