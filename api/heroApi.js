import axios from 'axios';

const heroApi = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    apikey: 'fdeff499d2c6279f1f30a22ff9788a56',
    hash: '659e99981dee1635417a383ddde5b67b',
    ts: 'mytimestampMarvel',
  },
});

export default heroApi;
