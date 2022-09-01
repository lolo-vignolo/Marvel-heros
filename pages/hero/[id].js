import React from 'react';

import heroApi from '../../api/heroApi';
import MainPage from '../../components/selectedCar/MainPage';

const Hero = ({ hero, comicsResp }) => {
  return <MainPage hero={hero} comicsResp={comicsResp} />;
};

export async function getStaticPaths() {
  const resp = await heroApi.get('/characters?limit=100');
  const data = resp.data['data']['results'];
  const paths = data.map((hero) => ({ params: { id: `${hero.id}` } }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const resp = await heroApi.get(`/characters/${params.id}`);
  const data = resp.data['data']['results'];

  const comics = await heroApi.get(`/characters/${params.id}/comics`);

  const comicsData = comics.data['data']['results'];

  return {
    props: {
      hero: data[0],
      comicsResp: comicsData,
    },
  };
};

export default Hero;
