import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservationData, setReservationData] = useState({
    date: new Date(),
    time: "",
    guests: null,
    request: "",
    info: {
      firstName: "",
      lastName: "",
      countryCode: "+90",
      phone: "",
      email: "",
      allergyInfo: "",
    },
  });

  return (
    <ReservationContext.Provider value={{ reservationData, setReservationData }}>
      {children}
    </ReservationContext.Provider>
  );
}

ReservationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};