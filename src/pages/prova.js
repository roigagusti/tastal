import { useState } from 'react';

export default function Prova() {
  
  const [message, setMessage] = useState('');
  const [enterPressed, setEnterPressed] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  function handleKeyPress(event) {
    const tecla = event.key
    if (tecla === "Enter") {
      setEnterPressed(true);
    }
    if (tecla === "Backspace") {
      setEnterPressed(false);
    }
  }

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      {enterPressed && <h2>Message: {message}</h2>}
    </div>
  );
}