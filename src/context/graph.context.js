/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from './results.context';
import { getHistoricalData } from '../services/requests.service';
export const GraphContext = React.createContext();

export const GraphContextProvider = ({ children }) => {
  const { country } = useContext(LocationContext);
  const [graphInfo, setGraphInfo] = useState([]);

  const retrieveGraphInfo = () => {
    getHistoricalData(country)
      .then((res) => {
        setGraphInfo(res);
       })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
 
  }, []);

  return (
    <GraphContext.Provider
      value={{
        graphInfo,
        retrieveGraphInfo,
      }}>
      {children}
    </GraphContext.Provider>
  );
};