// make the GET request to fetch data from the URL then using promise function to handle response.

export const getInfo = (state) => {
  let url = `https://disease.sh/v3/covid-19/states/${state}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const getCountryInfo = (country) => {
  let url = `https://disease.sh/v3/covid-19/countries/${country}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};
export const getAllCountries = () => {
  let url = `https://disease.sh/v3/covid-19/countries`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const getHistoricalData = (country) => {
  let url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=60`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.timeline.cases;
    })
    .catch((err) => console.error(err));
};

export const getHistoricalStateData = (state) => {
  let url = `https://disease.sh/v3/covid-19/nyt/states/${state}?lastdays=90`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const getVaccineData = (country) => {
  let url = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=60`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.timeline;
    })
    .catch((err) => console.error(err));
};

// axios.get(`https://api.covidtracking.com/v1/states/ca/20200501.json`).then((res) => {
//   const data = res.data.hospitalizedCurrently;
// const response = await axios.get(`https://api.covidtracking.com/v1/states/ca/20200501.json`);
// return response.data;

// return res.data;
