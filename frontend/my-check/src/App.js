import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import Email1 from './Email1';
import Email2 from './Email2';
import Ok from './Ok';
import False from './False';
const apiUrl = '//localhost:3000';
function App() {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const isSend1=false;
  const isSend2=false;
  const sendEmaileFromServe1 =async(email1) => {
   if(!isSend1){
     await axios.post(`${apiUrl}/api/send-email1`, { email1 });
      isSend1=true;
       }
    }
    const sendEmaileFromServe2 =async(email2) => {
      if(!isSend2){
      await axios.post(`${apiUrl}/api/send-email2`, { email2 });
      isSend2=true;
      }
    }
  const handleEmail1Change = (e) => {
    setEmail1(e.target.value);

  };

  const handleEmail2Change = (e) => {
    setEmail2(e.target.value);
  };


const sendEmail1 = (email1) => {
  sendEmaileFromServe1(email1);
};
const sendEmail2 = (email2) => {
  sendEmaileFromServe2(email2);
};


  return (
    <div className="App">
      <Email1 value={email1} onChange={handleEmail1Change} />
      <button type="submit" onClick={sendEmail1} className='buttonStyle'>اطلب رمز التحقق للبريد الأول</button>  
      <Email2 value={email2} onChange={handleEmail2Change} />
      <button type="submit" onClick={sendEmail2} className='buttonStyle'>اطلب رمز التحقق للبريد الثاني</button>  

      {isButtonClicked && (
        <div className="inputContainer">
          <label>أدخل رمز التحقق الخاص بـ Email1:</label>
          <input
            type="text"
            value={code1}
            onChange={(e) => setCode1(e.target.value)}
          />
          <br/>
          <label>أدخل رمز التحقق الخاص بـ Email2:</label>
          <input
            type="text"
            value={code2}
            onChange={(e) => setCode2(e.target.value)}
          />
        </div>
      )}

      {/* {isVerificationCorrect ? ( <Ok />) : (<False />)} */}
    </div>
  );
}

export default App;
