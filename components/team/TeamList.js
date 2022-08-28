import React from 'react';

import HerosGrid from '../heroList/HerosGrid';
import classes from './teamList.module.css';

const TeamList = ({ info }) => {
  return (
    <div className={classes.container}>
      <HerosGrid heros={info} />
    </div>
  );
};

export default TeamList;
