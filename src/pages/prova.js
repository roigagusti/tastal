import App from '../components/Api/api.js';

export const Prova = () => {
  const data = App({query: "places.php?query=tomas&type=findSpot"});
  
  return (
    <>
      <p>{data}</p>
    </>
  )
}

export default Prova;