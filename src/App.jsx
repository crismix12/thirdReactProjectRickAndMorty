import axios from 'axios'
import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Characters from './components/Characters'


function App() {
  const [location, setLocation] = useState({})
  const [typeLocation, setTypeLocation] = useState("")

  const searchLocation = () =>{
      axios.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
           .then(res=> setLocation(res.data))
    }

  useEffect( () => {

    const randomId = Math.floor((Math.random() * 126) + 1)

    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res=> setLocation(res.data))
  }, [])



  console.log(location);

  return (
    <div className="App">
      <div className='header'>
        <img className='header-banner' src="./src/assets/img/headerImg.webp" alt="" />   
      </div>

        <div className='content-container'>
              <nav className='header-info'>
                <p>Name: <br /> {location.name}</p>
                <p>Type: <br /> {location.type}</p>
                <p>Dimension: <br /> {location.dimension}</p>  
                <p>Population: <br /> {location.residents?.length}</p>  
              </nav>
              <section>
                <input  className='search-bar' 
                        type="text"
                        value={typeLocation}
                        onChange = {e => setTypeLocation(e.target.value)}
                  />
                  <button onClick={searchLocation}>Search</button>
              </section>
              <ul className='characters-container'>
                    {/* mas que filtrado es una lista de residentes de la posicion actual de la busqueda! */}
                    {location.residents?.map(resident => (
                        // <li key={resident}>{resident}</li>
                        <Characters 
                        characterUrl={resident}
                        key = {resident}
                        />
                    ))}
              </ul>
        </div>

    </div>
  )
}

export default App
