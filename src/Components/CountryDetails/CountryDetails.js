import React from 'react';

const CountryDetails = (props) => {
  const countryId = props.match.params.cca3;
  const country = props.countries.find((country) => country.cca3 === countryId);
  console.log('country', country);
  return (
    <div>
      <h1 style={{ fontSize: '9rem' }}>{country.flag}</h1>
      <h2>{country.name.common}</h2>
      <h4>Official name: {country.name.official}</h4>
      <h4>Capital: {country.capital}</h4>
      <h4>Area (km2): {country.area}</h4>
      <h4>Region: {country.region}</h4>
      <h4>Sub region: {country.subregion}</h4>
      <h4>Languages: </h4>
      {/* <ul>
          {{country.languages.map(lang => {
            <li>{lang.value}</li>
          })}}
        </ul> */}
      <h4>Currency: {country.currency}</h4>
    </div>
  );
};

export default CountryDetails;
