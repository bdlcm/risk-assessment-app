/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';

import { getInfo, getAllCountries } from '../services/requests.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [area, setArea] = useState([]);
  const [countries, setcountries] = useState([]);

  const getArea = (clickedArea) => {
    setArea(clickedArea);
  };
  const retrieveCountries = () => {
    getAllCountries()
      .then((res) => {
        setcountries(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    retrieveLocation();
    retrieveCountries();
  }, [area]);

  return (
    <LocationContext.Provider
      value={{
        location,
        getArea,
        countries,
        area,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
