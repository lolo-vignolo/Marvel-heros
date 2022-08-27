import { useState } from 'react';
import { motion } from 'framer-motion';

import classes from './all-heros.module.css';
import HerosGrid from './HerosGrid';
import { Pagination } from '../helpers/Pagination';
import { usePagination } from '../../hooks/usePagination';

const AllHeros = ({ heros }) => {
  const [search, setSearch] = useState('');
  const [filteredHeros, setFilteredHeros] = useState(heros);

  const { currentItems, itemsPerPage, paginate } = usePagination({
    filteredHeros,
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = heros.filter((hero) => {
      return hero.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredHeros(filtered);
  };

  return (
    <motion.div layout className={classes.allPosts}>
      <section className={classes.posts}>
        <div className={classes.search}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            MARVEL HEROS
          </motion.h1>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search"
            name="name"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <hr className={classes.hr} />

        <HerosGrid heros={currentItems} />
      </section>
      <Pagination
        totalItems={heros.length}
        paginate={paginate}
        itemsPerPage={itemsPerPage}
      />
    </motion.div>
  );
};

export default AllHeros;
