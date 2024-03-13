import { useEffect, useState } from 'react';
import './App.css'
import AllDogs from './Components/AllDogs';

function App() {
  const [allDogs, setAllDogs] = useState([]);
  
  // hämta BARA från API:et när App.jsx först renderas mha useEffect
  useEffect(() => {
    // få in alla hundar från API:et
    const fetchDogs = async () => {
      const response = await fetch("https://majazocom.github.io/Data/dogs.json");
      const data = await response.json();
      setAllDogs(await data);
    };
    fetchDogs();
  }, []);


  return (
    <>
      <h1>DOGGY DAYCARE</h1>
      <input type='text' defaultValue="SÖKTEXT" />
      <AllDogs dogs={allDogs} />
    </>
  )
}

export default App
