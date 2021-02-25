import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';

import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/countries/:cca3" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
