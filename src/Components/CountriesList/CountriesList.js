import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      <h2>Countries</h2>
      {props.countries.map((country) => {
        return (
          <div
            key={country.alpha3Code}
            style={{ backgroundColor: 'aliceblue' }}
          >
            <h3>
              <Link to={`/countries/${country.alpha3Code}`}>
                {country.name}
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
