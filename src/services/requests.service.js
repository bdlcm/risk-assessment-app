// make the GET request to fetch data from the URL then using promise function to handle response.
 
 

export const getInfo = (state) => {
  let url =  `https://api.covidtracking.com/v1/states/${state}/current.json`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data, "url", url);
      return data;
    })
    .catch((err) => console.error(err));
};

// axios.get(`https://api.covidtracking.com/v1/states/ca/20200501.json`).then((res) => {
//   const data = res.data.hospitalizedCurrently;
// const response = await axios.get(`https://api.covidtracking.com/v1/states/ca/20200501.json`);
// return response.data;

// return res.data;
