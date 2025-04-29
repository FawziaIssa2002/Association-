import React from 'react';

const Email1 = ({ value, onChange }) => {


  return (
    <div>
      <label className='lab'>أدخل البريد الإلكتروني :</label>
      <input
        type="email"
        value={value}
        onChange={onChange}
        className='inputStyle'
        required
      />
    </div>
  );
}

export default Email1;
