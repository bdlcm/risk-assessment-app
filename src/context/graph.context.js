/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from './results.context';
import {
  getHistoricalData,
  getHistoricalStateData,
  getVaccineData,
  getCountryInfo,
} from '../services/requests.service';
export const GraphContext = React.createContext();

export const GraphContextProvider = ({ children }) => {
  const { country, area, countryInfo } = useContext(LocationContext);
  const [stateInfo, setStateInfo] = useState({
    '8/10/21': 183347,
  });

  const [infectionPerPopInfo, setInfectionPerPopInfo] = useState({
    '8/10/21': 13347,
  });
  const [graphInfo, setGraphInfo] = useState({
    '8/10/21': 183347,
  });
  const [graphInfoDeaths, setGraphInfoDeaths] = useState({
    '8/10/21': 183347,
  });

  const [graphInfoRecovered, setGraphInfoRecovered] = useState({
    '8/10/21': 183347,
  });

  const [vaccineInfo, setVaccineInfo] = useState({
    '8/10/21': 183347,
  });

  const retrieveGraphPerCapInfo = () => {
    console.log('graphPerCap', graphInfo, country);
    graphInfo.map((info) => {
      Object.value(info) / country.population;
    });
  };

  const retrieveGraphInfo = () => {
    getHistoricalData(country)
      .then((res) => {
        setGraphInfo(res.cases);
        setGraphInfoDeaths(res.deaths);
        setGraphInfoRecovered(res.recovered);

        setInfectionPerPopInfo(
          Object.fromEntries(
            Object.entries(res.cases).map(([k, v]) => [k, v / countryInfo.population]),
          ),
        );
        console.log('infectionPerPopInfo', infectionPerPopInfo, graphInfo);
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
        graphInfoRecovered,
        graphInfoDeaths,
        vaccineInfo,
        stateInfo,
        infectionPerPopInfo,
        retrieveGraphPerCapInfo,
        retrieveGraphInfo,
        retrieveVaccineInfo,
        retrieveStateGraphInfo,
      }}>
      {children}
    </GraphContext.Provider>
  );
};
