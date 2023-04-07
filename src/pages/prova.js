import { useState } from 'react';

export default function Prova() {
  
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
      />

      <h2>Message: {message}</h2>
    </div>
  );
}