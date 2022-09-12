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
  }else if(typeLocation > 126 || typeLocation < 1){
    alert("Ingrese un ID valido!")
  }else{
    searchLocation();
  }
}

  useEffect( () => {

    const randomId = Math.floor((Math.random() * 126) + 1)

    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res=> setLocation(res.data))
  }, [])



  // console.log(location);

  return (
    <div className="App">
      <div className='header'>
        <img className='header-banner' src="./src/assets/img/headerImg.webp" alt="" />   
      </div>

        <div className='content-container'>
            <section>
                <input  className='search-bar' 
                        placeholder='Ingrese un ID desde 1 hasta 126'
                        type="text"
                        value={typeLocation}
                        onChange = {e => setTypeLocation(e.target.value)}
                  />
                  <button className='searchBtn' onClick={validateSearch}>Search by ID</button>
              </section>
              <nav className='header-info'>
                <p className='header-child'>Name: <br /> {location.name}  </p>
                <p className='header-child'>Type: <br /> {location.type}</p>
                <p className='header-child'>Dimension: <br /> {location.dimension}</p>  
                <p className='header-child'>Population: <br /> {location.residents?.length}</p>  
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
