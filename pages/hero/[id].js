import React from 'react';

import heroApi from '../../api/heroApi';
import MainPage from '../../components/selectedCar/MainPage';

const Hero = ({ hero, comicsResp }) => {
  return <MainPage hero={hero} comicsResp={comicsResp} />;
};

export async function getServerSideProps(context) {
  const resp = await heroApi.get(`/characters/${context.query.id}`);
  const data = resp.data['data']['results'];

  const comics = await heroApi.get(`/characters/${context.query.id}/comics`);
  const comicsData = comics.data['data']['results'];

  return {
    props: {
      hero: data[0],
      comicsResp: comicsData,
    },
  };
}

export default Hero;
