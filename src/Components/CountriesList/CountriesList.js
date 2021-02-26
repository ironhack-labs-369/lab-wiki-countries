import React from 'react';
import { Link } from 'react-router-dom';
// import countries from '../../countries.json';

const CountriesList = (props) => {
  return (
    <div>
      <h2>Countries</h2>
      {props.countries.map((country) => {
        return (
          <div key={country.cca3}>
            <h3>
              <Link to={`/countries/${country.cca3}`}>
                {country.name.common}
              </Link>
            </h3>
            <h5> {country.region}</h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
