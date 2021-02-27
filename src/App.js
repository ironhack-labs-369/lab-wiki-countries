import { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
// import countriesJson from './countries.json';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [countries, setCountries] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const countriesAPI = await axios.get(
        'https://restcountries.eu/rest/v2/all'
      );
      console.log('countriesAPI', countriesAPI.data);
      setCountries(countriesAPI.data);
    };
    fetchData();
  }, []);

  if (!countries) return <h3>Loading...</h3>;
  return (
    <div className="App" style={{ backgroundColor: 'rgb(102,127,255)' }}>
      <Navbar />
      <div
        style={{
          display: 'flex',
          width: '100vw',
          margin: '0 5% 5% 5%',
          position: 'fixed',
        }}
      >
        <div
          style={{
            width: '35%',
            height: '100vh',
            overflowX: 'hidden',
            overflowY: 'auto',
            margin: '0 5% 0 0',
          }}
        >
          <Route
            path="/"
            render={(props) => (
              <CountriesList {...props} countries={countries} />
            )}
          />
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '5%',
          }}
        >
          <Route
            path="/countries/:alpha3Code"
            render={(props) => (
              <CountryDetails {...props} countries={countries} />
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
