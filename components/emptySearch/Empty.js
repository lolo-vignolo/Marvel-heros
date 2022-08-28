import React from 'react';
import Image from 'next/image';
import classes from './empty.module.css';

const Empty = ({ picture, height, width, text }) => {
  return (
    <div className={classes.container}>
      <h1>{text}</h1>
      <Image src={picture} alt="Empty" width={width} height={height} />
    </div>
  );
};

export default Empty;
