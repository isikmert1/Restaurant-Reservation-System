import { useState } from 'react';
import './Info.css';

function Info() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        countryCode: '+90',
        phone: '',
        email: '',
        allergyInfo: '',
    });
    const [error, setError] = useState(''); // State for error messages

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validation rules
        if (name === 'firstName' || name === 'lastName') {
            // Only allow letters for first and last names
            if (/[^a-zA-ZğüşöçİĞÜŞÖÇ\s]/.test(value)) return;
        } else if (name === 'countryCode') {
            // Ensure country code starts with + and only has numbers after it
            if (!/^\+/.test(value)) {
                // Prepend "+" if it's missing
                setFormData((prevData) => ({
                    ...prevData,
                    countryCode: '+' + value.replace(/^\+/, ''),
                }));
                return;
            }
            if (!/^\+\d*$/.test(value)) return; // Allow only numbers after the +
        } else if (name === 'phone') {
            // Only allow numbers for phone
            if (/[^0-9]/.test(value)) return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.countryCode === '+' || formData.countryCode.length < 2) {
            setError('Please enter a valid country code with numbers after the "+" sign.');
            return;
        }

        setError(''); 
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="info-form">
            <div className='fullname-container'>
                <input
                    type="text"
                    name="firstName"
                    placeholder='Adınız*'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder='Soyadınız*'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="phone-input">
                <input
                    type="text"
                    name="countryCode"
                    placeholder='Ülke Kodu*'
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                    maxLength="4"
                    className="country-code-input"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder='Telefon Numarası*'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='phone-number-input'
                />
            </div>
            <input
                type="email"
                name="email"
                placeholder='E-Posta Adresiniz*'
                value={formData.email}
                onChange={handleChange}
                required
                className='email-input'
            />
            {error && <p className="error-message">{error}</p>} 
            <button type="submit" className="submit-button">
                Tamamla
            </button>
        </form>
    );
}

export default Info;
