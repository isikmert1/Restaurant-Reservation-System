import { useState } from 'react';
import Navbar from './components/Navbar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Time from './components/Time'
import Guest from './components/Guest'
import Request from './components/Request'
import Info from './components/Info'
import Footer from './components/Footer'
import './App.css';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const renderComponent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <section className="calendar-container">
            <p>Lütfen rezervasyon tarihi seçiniz.</p>
            <Calendar onChange={handleDateChange} value={date} locale="tr-TR"/>  
          </section>
        );
      case 1:
        return (
          <section className="time-container">
            <p>Lütfen rezervasyon saati seçiniz.</p>
            <Time /> 
          </section>
        );
      case 2:
        return (
          <section className="guest-container">
            <p>Lütfen misafir sayısını seçiniz.</p>
            <Guest /> 
          </section>
        );
      case 3:
        return (
          <section className="request-container">
            <p>Etiket seçebilir ve notunuz varsa rezervasyonunuzu özelleştirebilirsiniz.</p>
            <Request />
          </section>
        );
      case 4:
        return (
          <section className="info-container">
            <p>Lütfen rezervasyonunuzu tamamlayın.</p>
            <Info />
          </section>
        );
      default:
        return null;
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // console.log('Selected date:', newDate);
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
