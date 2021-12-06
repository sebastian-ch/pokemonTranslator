
import './App.css';
import { useEffect, useState } from 'react';
import poke from './pokemonjson1.json'

function App() {
   
    const [allPokes, setPokes] = useState(poke)
    const [filteredPokes, setFilteredPokes] = useState(allPokes)


    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      let result1 = [];
      let combo = [];

      //console.log(value);

      result = allPokes.filter((data) => {return data.name_english.toLowerCase().search(value) != -1;});
      result1 = allPokes.filter((data) => {return data.name_german.toLowerCase().search(value) != -1;});
      
      //console.log(result)
      //console.log('---')
      //console.log(result1)

      combo = [...new Set([...result,...result1])]
        

      setFilteredPokes(combo);
    }

    useEffect(() => {
      document.title = 'pokemon translator'
     // setPokes(poke)
    },[])
    
    //const [filt, setFilt] = useState([])

    //console.log(poke)

  return (
    <div className="App">
      <input type='text' className="search" placeholder="Search.." onChange={(event) => handleSearch(event)} />
      <br></br>
        {
          filteredPokes.map(d => <div className='view'><img src={process.env.PUBLIC_URL + `/pokemon/${d.pokemon_species_id}.png`} /> <div className='text'>{d.name_english} : {d.name_german}</div></div>)
        }
       {/* {poke.map(d => <div className='view'><img src={process.env.PUBLIC_URL + `/pokemon/${d.pokemon_species_id}.png`} /> <div className='text'>{d.name_english} : {d.name_german}</div></div>)}   */}
    </div>
  );
}

export default App;
