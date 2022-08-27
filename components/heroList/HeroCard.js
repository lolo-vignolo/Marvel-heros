import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classes from './hero-item.module.css';

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

const HeroCard = ({ hero, index }) => {
  const {
    id,
    name,
    thumbnail,
    comics,
    series,
    stories,
    modified,
    description,
  } = hero;

  const formattedDate = new Date(modified).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const linkPath = `/hero/${id}`;
  return (
    <motion.li
      className={classes.post}
      custom={{ delay: (index + 1) * 0.3 }}
      initial="hidden"
      animate="visible"
      exit={'hidden'}
      variants={variants}
    >
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={name}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{name}</h3>
            <time>{formattedDate}</time>
            <p className={classes.paragraph}>hol</p>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default HeroCard;
