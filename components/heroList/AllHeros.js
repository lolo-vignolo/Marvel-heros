import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { usePagination } from '../../hooks/usePagination';
import HerosGrid from './HerosGrid';
import Empty from '../emptySearch/Empty';

import classes from './all-heros.module.css';
import { Pagination } from '../../helpers/Pagination';

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

  const empty = {
    height: 800,
    width: 600,
    text: `No Heroes found.`,
  };

  return (
    <div className={classes.allPosts}>
      <section className={classes.posts}>
        <div className={classes.search}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            MARVEL HEROES
          </motion.h1>

          <Image
            src="/pictures/logo.png"
            alt="logo"
            width={90}
            height={90}
            className={classes.img}
          />

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

        {currentItems.length > 0 ? (
          <HerosGrid heros={currentItems} />
        ) : (
          <Empty
            picture="/pictures/capitane.png"
            height={empty.height}
            width={empty.width}
            text={empty.text}
          />
        )}
      </section>
      <Pagination
        totalItems={heros.length}
        paginate={paginate}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default AllHeros;
