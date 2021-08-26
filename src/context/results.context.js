import React, { useState, useContext, createContext, useEffect } from 'react';

import { getInfo } from '../services/requests.service';

export const locationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
   
  
    const retrieveLocation = (loc) => {
     
        setLocation([]);
  
      getInfo()
        
        .then((results) => {
          setIsLoading(false);
          setLocation(results);
        })
        .  
    };
  
    useEffect(() => {
      if (location) {
         retrieveLocation(locationString);
      }
    }, [location]);
  
    return (
      <LocationContext.Provider
        value={{
          location,
         
        }}
      >
        {children}
      </LocationContext.Provider>
    );
  };
  