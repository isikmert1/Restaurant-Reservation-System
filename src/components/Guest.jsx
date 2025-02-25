// Guest.jsx
import { useState, useContext } from "react";
import "./Guest.css";
import { ReservationContext } from "../ReservationContext";

function Guest() {
  const { reservationData, setReservationData } = useContext(ReservationContext);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const handleGuestClick = (number) => {
    if (selectedGuest === number) {
      setSelectedGuest(null);
      setReservationData(prev => ({ ...prev, guests: null }));
    } else {
      setSelectedGuest(number);
      setReservationData(prev => ({ ...prev, guests: number }));
    }
  };

  return (
    <div className="guest-section">
      <div className="guest-button-container">
        {[...Array(15)].map((_, index) => {
          const number = index + 1;
          return (
            <button
              key={number}
              className={`guest-buttons ${selectedGuest === number ? 'selected' : ''}`}
              onClick={() => handleGuestClick(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
      <p className="guest-para">15 kişi üzeri için lütfen bizimle iletişime geçiniz.</p>
    </div>
  );
}

export default Guest;
