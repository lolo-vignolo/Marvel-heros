import React from 'react';
import Image from 'next/image';

import heroApi from '../../api/heroApi';
import classes from './hero.module.css';

const Hero = ({ hero }) => {
  const { id, name, thumbnail, comics, modified } = hero;
  const comicsList = comics.items
    ? comics.items.slice(0, 5)
    : 'Not information for this Hero';

  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <div className={classes.img}>
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            width={500}
            height={400}
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className={classes.info}>
          <div>
            <h1>{name}</h1>
          </div>
          <div>
            <h3>ID: {id}</h3>
          </div>
          <div>
            <h3>You can find this Hero in the below Comics:</h3>
            <div>
              {comicsList.map((comic) => (
                <div key={comic.id}>
                  <h4>{comic.name}</h4>
                </div>
              ))}
            </div>
            <button style={{ marginButton: '3rem' }}>add</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const resp = await heroApi.get(`/characters/${context.query.id}`);
  const data = resp.data['data']['results'];

  return {
    props: {
      hero: data[0],
    },
  };
}

export default Hero;
