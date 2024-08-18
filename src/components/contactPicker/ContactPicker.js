import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="" disabled>Select a contact</option>
      {contacts.map((contact, index) => (
        (<option key={index} value={contact.name}>{contact.name}</option>)
      ))}
    </select>
  );
};
