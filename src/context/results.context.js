/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';

import { getInfo } from '../services/requests.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState();
  const [area, setArea] = useState();

  const getArea = (clickedArea) => {
    setArea(clickedArea);
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
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        getArea,
        area,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
