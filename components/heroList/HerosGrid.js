import HeroCard from './HeroCard';
import classes from './hero-grid.module.css';

const HerosGrid = ({ heros }) => {
  return (
    <ul className={classes.grid}>
      {heros.map((hero, index) => (
        <HeroCard key={hero.id} hero={hero} index={index} />
      ))}
    </ul>
  );
};

export default HerosGrid;
