import React, { useState, useEffect } from 'react'
export const Prova = () => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.tastal.ga/places.php?query=tomas&type=findSpot&lan=es');
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      { response ? JSON.stringify(response) : 'Loading...' }
    </div>
  );
}
export default Prova;