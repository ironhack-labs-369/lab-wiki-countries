import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = (props) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const countryId = props.match.params.alpha3Code;

  // const country = props.countries.find((country) => country.cca3 === countryId);

  useEffect(() => {
    // const country = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
      .then((res) => {
        setSelectedCountry(() => res.data);
      });
    // };
  }, [countryId]);

  console.log('selectedCountry', selectedCountry);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const country = await axios.get(
  //       `https://restcountries.eu/rest/v2/alpha/${countryId}`
  //     );
  //     console.log('resp API', country);
  //     setSelectedCountry(() => country);
  //   };
  //   fetchData();
  // }, [countryId]);

  return (
    <div
      style={{
        backgroundColor: 'aliceblue',
        height: '80vh',
      }}
    >
      {/* <h1 style={{ fontSize: '9rem' }}>{selectedCountry.flag}</h1> */}
      <img
        src={selectedCountry.flag}
        alt="flag"
        style={{ width: '70%', margin: '5% 0 10% 0' }}
      />
      <h2>{selectedCountry.name}</h2>
      <h4>Native name: {selectedCountry.nativeName}</h4>
      {/* {selectedCountry.independent ? (
        <h6>Indipendent</h6>
      ) : (
        <h6> Non Indipendent</h6>
      )} */}
      <h4>Capital: {selectedCountry.capital}</h4>
      <h4>Area (km2): {selectedCountry.area}</h4>
      <h4>Population: {selectedCountry.population}</h4>
      <h4>Region: {selectedCountry.region}</h4>
      <h4>Sub region: {selectedCountry.subregion}</h4>
      <h4>Languages: </h4>
      {/* <ul>
        {selectedCountry.languages.forEach((lang) => {
          <li>
            <h4>{lang.name}</h4>
          </li>;
        })}
      </ul> */}
      <h4>Currencies: </h4>
      {/* <ul>
        {selectedCountry.currencies.map((curr) => {
          <li>
            <h4>{curr.name}</h4>
          </li>;
        })}
      </ul> */}
    </div>
  );
};

export default CountryDetails;
