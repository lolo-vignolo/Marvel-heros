import React from 'react';

import ComicCard from './ComicCard';
import classes from './comicsGrid.module.css';

const ComicsGrid = ({ comics }) => {
  if (!comics.length > 0) {
    return null;
  }

  return (
    <ul className={classes.grid}>
      {comics.map((comic, index) => (
        <ComicCard key={comic.id} comic={comic} index={index} />
      ))}
    </ul>
  );
};

export default ComicsGrid;
