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

const validateSearch = () => {
  if(typeLocation === ""){
    alert("Ingrese un ID");
  }else{
    searchLocation();
  }
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
            <section>
                <input  className='search-bar' 
                        type="text"
                        value={typeLocation}
                        onChange = {e => setTypeLocation(e.target.value)}
                  />
                  {/* <button onClick={searchLocation}>Search</button> */}
                  <button onClick={validateSearch}>Search</button>
              </section>
              <nav className='header-info'>
                <p className='header-child'>Name: <p> {location.name} </p> </p>
                <p className='header-child'>Type: <p> {location.type}</p></p>
                <p className='header-child'>Dimension: <p>{location.dimension}</p> </p>  
                <p className='header-child'>Population: <p>{location.residents?.length}</p></p>  
              </nav>

              <ul className='characters-container'>
                    {location.residents?.map(resident => (
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
