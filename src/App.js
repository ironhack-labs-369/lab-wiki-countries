import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', width: '100vw', margin: '0 5% 5% 5%' }}>
        <div style={{ width: '30%' }}>
          <Route path="/" component={CountriesList} />
        </div>
        <div
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Route path="/countries/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
