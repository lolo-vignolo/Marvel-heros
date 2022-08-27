import axios from 'axios';

const APYKEY = process.env.APYKEY;
const HASH = process.env.HASH;
const TS = process.env.TS;

const heroApi = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    apikey: APYKEY,
    hash: HASH,
    ts: TS,
  },
});

export default heroApi;
