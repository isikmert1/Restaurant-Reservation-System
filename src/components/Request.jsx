// Request.jsx
import { useState, useContext } from "react";
import "./Request.css";
import { ReservationContext } from "../ReservationContext";

function Request() {
  const { reservationData, setReservationData } = useContext(ReservationContext);
  const [selectedButton, setSelectedButton] = useState(null);
  const [note, setNote] = useState('');

  const handleButtonClick = (event) => {
    const buttonText = event.target.closest('button').innerText;
    if (selectedButton === buttonText) {
      setSelectedButton(null);
      setReservationData(prev => ({ ...prev, request: "" }));
    } else {
      setSelectedButton(buttonText);
      setReservationData(prev => ({ ...prev, request: buttonText }));
    }
  };

  const handleTextareaChange = (event) => {
    setNote(event.target.value);
    // Optionally store the note along with the request:
    setReservationData(prev => ({ ...prev, request: event.target.value }));
  };

  return (
    <div className="request-section">
      <div className="request-button-container">
        {['Doğum Günü', 'Yıl Dönümü', 'Özel Etkinlik', 'Toplantı'].map((label) => (
          <button
            key={label}
            className={`request-buttons ${selectedButton === label ? 'selected' : ''}`}
            onClick={handleButtonClick}
          >
            <img src="https://placehold.co/32x32" alt="icon" className="requestBtn-img" />
            <p className="requestBtn-para">{label}</p>
          </button>
        ))}
      </div>
      {selectedButton && (
        <textarea
          className="request-textarea"
          rows={4}
          maxLength={150}
          placeholder="Rezervasyon ile ilgili özel bir notunuz varsa belirtiniz."
          value={note}
          onChange={handleTextareaChange}
        ></textarea>
      )}
    </div>
  );
}

export default Request;
