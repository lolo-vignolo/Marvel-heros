import React from 'react';
import Image from 'next/image';
import classes from './empty.module.css';

const Empty = () => {
  return (
    <div className={classes.container}>
      <h1>There is not any Hero selected.</h1>
      <h1>Please go to Heros and choose one!</h1>
      <Image src="/pictures/heros.png" alt="Empty" width={700} height={400} />
    </div>
  );
};

export default Empty;
