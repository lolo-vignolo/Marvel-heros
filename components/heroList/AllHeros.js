import { motion } from 'framer-motion';
import classes from './all-heros.module.css';
import HerosGrid from './HerosGrid';

const AllHeros = ({ heros }) => {
  return (
    <motion.div layout className={classes.allPosts}>
      <section className={classes.posts}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            color: '#ff0000',
            fontSize: '5rem',
            fontWeight: 'bold',
            borderBottom: '2px solid #ff0000',
          }}
        >
          MARVEL HEROS
        </motion.h1>
        <HerosGrid heros={heros} />
      </section>
    </motion.div>
  );
};

export default AllHeros;
