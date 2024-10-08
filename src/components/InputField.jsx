import React from 'react';

const InputField = ({ type, placeholder }) => {
  return (
    <div className="input-field">
      <input type={type} placeholder={placeholder} required />
    </div>
  );
};

export default InputField;
