import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import classes from './comicCard.module.css';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

const ComicCard = ({ comic, index }) => {
  const { id, title, thumbnail, description } = comic;
  if (
    description === null ||
    description === '' ||
    description === undefined ||
    description.length < 20
  ) {
    return null;
  }
  return (
    <motion.li
      className={classes.post}
      custom={{ delay: (index + 1) * 0.2 }}
      initial="hidden"
      animate="visible"
      exit={'hidden'}
      variants={variants}
    >
      <a>
        <div className="{classes.image}">
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={title}
            width={40}
            height={40}
            layout="responsive"
          />
        </div>
        <div className="">
          <h3>{title}</h3>

          <p className=""> {description} </p>
        </div>
      </a>
    </motion.li>
  );
};

export default ComicCard;
