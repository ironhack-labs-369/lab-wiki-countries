import React from 'react';
import countries from '../../countries.json';

const CountryDetails = (props) => {
  console.log('props', props.match);
  const countryId = props.match.params.cca3;
  const country = countries.find((country) => country.cca3 === countryId);
  console.log('country', country);
  return (
    <div>
      <h1 style={{ fontSize: '9rem' }}>{country.flag}</h1>
      <h2>Common name: {country.name.common}</h2>
      <h3>Official name: {country.name.official}</h3>
      <h3>Capital: {country.capital}</h3>
      <h4>Languages: </h4>
      <h4>Currency: {country.currency}</h4>
    </div>
  );
};

export default CountryDetails;
