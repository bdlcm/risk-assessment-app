/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from './results.context';
import {
  getHistoricalData,
  getHistoricalStateData,
  getVaccineData,
} from '../services/requests.service';
export const GraphContext = React.createContext();

export const GraphContextProvider = ({ children }) => {
  const { country, area } = useContext(LocationContext);
  const [stateInfo, setStateInfo] = useState({
    '8/10/21': 183347,
  });
  const [graphInfo, setGraphInfo] = useState({
    '8/10/21': 183347,
  });

  const [vaccineInfo, setVaccineInfo] = useState({
    '8/10/21': 183347,
  });

  const retrieveGraphInfo = () => {
    getHistoricalData(country)
      .then((res) => {
        setGraphInfo(res);
        console.log('graph info', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retrieveStateGraphInfo = () => {
    getHistoricalStateData(area)
      .then((res) => {
        setStateInfo(res);
        console.log('state info', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retrieveVaccineInfo = () => {
    getVaccineData(country)
      .then((res) => {
        setVaccineInfo(res);
        console.log('vaccine info', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);

  return (
    <GraphContext.Provider
      value={{
        graphInfo,
        vaccineInfo,
        stateInfo,
        retrieveGraphInfo,
        retrieveVaccineInfo,
        retrieveStateGraphInfo,
      }}>
      {children}
    </GraphContext.Provider>
  );
};
