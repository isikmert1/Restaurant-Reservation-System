// App.jsx
import { useState, useContext } from 'react';
import Navbar from './components/Navbar';
import { Calendar } from "@/components/ui/calendar"
import Time from './components/Time';
import Guest from './components/Guest';
import Request from './components/Request';
import Info from './components/Info';
import Footer from './components/Footer';
import './App.css';

import { ReservationContext } from './ReservationContext';

function App() {
  const { reservationData, setReservationData } = useContext(ReservationContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleDateChange = (newDate) => {
    setReservationData(prev => ({ ...prev, date: newDate }));
  };

  const renderComponent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <section className="calendar-container">
            <p className='container-para'>Lütfen rezervasyon tarihi seçiniz.</p>
            <div className="w-full max-w-[500px] mx-auto">
            <Calendar
              mode="single" 
              selected={reservationData.date}
              onSelect={(newDate) => handleDateChange(newDate)}
              classNames="rounded-md" // Add Tailwind classes as needed
            />
            </div>
          </section>
        );
      case 1:
        return (
          <section className="time-container">
            <p className='container-para'>Lütfen rezervasyon saati seçiniz.</p>
            <Time />
          </section>
        );
      case 2:
        return (
          <section className="guest-container">
            <p className='container-para'>Lütfen misafir sayısını seçiniz.</p>
            <Guest />
          </section>
        );
      case 3:
        return (
          <section className="request-container">
            <p className='container-para'>Etiket seçebilir ve notunuz varsa rezervasyonunuzu özelleştirebilirsiniz.</p>
            <Request />
          </section>
        );
      case 4:
        return (
          <section className="info-container">
            <p className='container-para'>Lütfen rezervasyonunuzu tamamlayın.</p>
            <Info />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="intro-container">
          <h1 className="intro-title">Hoş Geldiniz!</h1>
          <p className="intro-para">
            Aşağıdaki bilgileri doldurarak, rezervasyon talebinizi gönderin. 
            Rezervasyon talep ettiğiniz şube sizi müsaitlik durumuna göre 
            onaylayabilir, sıraya alabilir ya da sizi bilgilendirerek iptal edebilir.
          </p>
        </section>
        <section className="selection-container">
          {['Tarih', 'Saat', 'Misafir', 'İstek', 'Bilgi'].map((item, index) => (
            <button
              key={index}
              className={`menu-item ${selectedIndex === index ? 'clicked' : ''}`}
              onClick={() => handleClick(index)} 
            >
              <img src="https://placehold.co/50x50" alt="icon" className="item-img" />
              <p className="item-para">{item}</p>
            </button>
          ))}
        </section>
        {renderComponent()}
      </main>
      <footer>
        <Footer /> 
      </footer>
    </div>
  );
}

export default App;
