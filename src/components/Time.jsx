// Time.jsx
import { useState, useContext } from "react";
import "./Time.css";
import { ReservationContext } from "../ReservationContext";

function Time() {
  const { reservationData, setReservationData } = useContext(ReservationContext);
  const [selectedTime, setSelectedTime] = useState(null);

  const mealTimes = {
    "Kahvaltı": ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30"],
    "Akşam Yemeği": ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
  };

  const handleTimeClick = (time) => {
    const newTime = selectedTime === time ? null : time;
    setSelectedTime(newTime);
    setReservationData(prev => ({ ...prev, time: newTime }));
  };

  return (
    <div className="time-section">
      {Object.entries(mealTimes).map(([mealType, times]) => (
        <div key={mealType} className="meal-section">
          <h2 className="time-title">{mealType}</h2>
          <div className="time-button-container">
            {times.map(time => (
              <button
                key={time}
                className={`time-buttons ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Time;
