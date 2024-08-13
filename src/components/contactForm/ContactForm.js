import React, { useState} from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const [phoneError, setPhoneError] = useState('');

  const polishPhoneNumberRegex = /^(\+48)?\s?(\d{3}[-\s]?\d{3}[-\s]?\d{3})$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (!polishPhoneNumberRegex.test(value) && value !== '') {
      setPhoneError('Invalid Polish phone number.');
    } else {
      setPhoneError('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

