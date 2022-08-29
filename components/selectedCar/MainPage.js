import React, { useState } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

import { existInTeam, toggleLocalTeam } from '../../helpers/localTeam';
import ComicsGrid from './ComicsGrid';
import classes from './hero.module.css';

const MainPage = ({ hero, comicsResp }) => {
  const [isInTeam, setIsInTeam] = useState(existInTeam(hero.id));

  const { id, name, thumbnail, series } = hero;
  const comicsList = series.items
    ? series.items.slice(0, 2)
    : 'Not information for this Hero';

  const onToggleTeam = () => {
    toggleLocalTeam(id);
    setIsInTeam(!isInTeam);
    if (!isInTeam) {
      confetti({
        zIndex: 999,
        particleCount: 200,
        spread: 200,
        angle: -100,
        startVelocity: 60,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };
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
          <button className={classes.btn} onClick={onToggleTeam}>
            {isInTeam ? 'Delete from my Team' : 'Save as Favorite'}
          </button>
          <h1>Name: {name}</h1>
          <h3>ID: {id}</h3>

          <h3>You can find this Hero in the below Series:</h3>
          {comicsList?.map((comic, index) => (
            <div className={classes.series} key={index}>
              <h4>. {comic.name}</h4>
            </div>
          ))}
          <div></div>
        </div>
      </div>
      <div className={classes.comicsCont}>
        <h1> Comics related to this Hero:</h1>
        <ComicsGrid comics={comicsResp} />
      </div>
    </section>
  );
};

export default MainPage;
