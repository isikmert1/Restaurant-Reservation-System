import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const renderComponent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <section className="calendar-container">
            <p>Lütfen rezervasyon tarihi seçiniz.</p>
            <Calendar />  
          </section>
        );
      case 1:
        return (
          <section className="time-container">
            <p>Lütfen rezervasyon saati seçiniz.</p>
            {/* <Time /> //TODO: Create Time component */}  
          </section>
        );
      case 2:
        return (
          <section className="guest-container">
            <p>Lütfen misafir sayısını seçiniz.</p>
            {/* <Guest /> //TODO: Create Guest component */}
          </section>
        );
      case 3:
        return (
          <section className="request-container">
            <p>Etiket seçebilir ve notunuz varsa rezervasyonunuzu özelleştirebilirsiniz.</p>
            {/* <Request /> //TODO: Create Request component */}
          </section>
        );
      case 4:
        return (
          <section className="info-container">
            <p>Lütfen rezervasyonunuzu tamamlayın.</p>
            {/* <Info /> //TODO: Create Info component */}
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
        {/* <Footer /> //TODO: Do Footer */}
      </footer>
    </div>
  );
}

export default App;
