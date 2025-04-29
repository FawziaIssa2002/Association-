// في ملف Email2.js
import React from 'react';

const Email2 = ({ value, onChange }) => {


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

export default Email2;
