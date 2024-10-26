import { useState } from 'react';
import './Request.css';

function Request() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [note, setNote] = useState('');

    const handleButtonClick = (event) => {
        const buttonText = event.target.closest('button').innerText; 
        
        if (selectedButton === buttonText) {
            setSelectedButton(null); 
            console.log('Deselected Button');
            console.log('Textarea Content:', note); 
        } else {
            setSelectedButton(buttonText); 
            console.log('Selected Button:', buttonText);
            console.log('Textarea Content:', note); 
        }
    };

    const handleTextareaChange = (event) => {
        setNote(event.target.value); 
    };

    return (
        <div className='request-section'>
            <div className='request-button-container'>
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
                    className='request-textarea'
                    rows={4}
                    maxLength={150}
                    placeholder='Rezervasyon ile ilgili özel bir notunuz varsa belirtiniz.'
                    value={note}
                    onChange={handleTextareaChange}
                ></textarea>
            )}
        </div>
    );
}

export default Request;
