import React, { useEffect, useState } from 'react';
import axios from 'axios';

// make the GET request to fetch data from the URL then using promise function to handle response.

export const getInfo = () => {
  axios.get(`https://api.covidtracking.com/v1/states/ca/20200501.json`).then((res) => {
    const data = res.data;
    console.log('data cases', data.positiveCasesViral);
    return res.data.json();
  });
};
