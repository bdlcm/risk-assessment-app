/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';

import { getInfo, getAllCountries, getCountryInfo } from '../services/requests.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  //sets state
  const [area, setArea] = useState();
  //sets country
  const [country, setCountry] = useState();

  //sets country code for querying country info
  const [countryISO, setCountryISO] = useState([]);

  //sets historical country info
  const [countryInfo, setcountryInfo] = useState([]);

  //sets state data
  const [location, setLocation] = useState([]);

  //gets list of countries for pulldown menu
  const [countries, setcountries] = useState([]);

  const getArea = (clickedArea) => {
    setArea(clickedArea);
  };
  const getCountry = (clickedArea) => {
    setCountry(clickedArea);
  };

  //get all countries for the country selection tab
  const retrieveCountries = () => {
    getAllCountries()
      .then((res) => {
        setcountries(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get  country info

  const retrieveCountry = () => {
    getCountryInfo(countryISO)
      .then((res) => {
        setcountryInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get  state info

  const retrieveLocation = () => {
    getInfo(area)
      .then((res) => {
        setLocation(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retrieveCountries();

    retrieveCountry();
    retrieveLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        area,
        location,
        getArea,
        getCountry,
        retrieveCountry,
        retrieveLocation,
        setCountryISO,
        countryInfo,
        countryISO,
        countries,
        country,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
