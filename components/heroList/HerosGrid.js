import HeroCard from './HeroCard';
import classes from './heros-grid.module.css';

const HerosGrid = ({ heros }) => {
  if (!heros.length > 0) {
    return null;
  }

  return (
    <ul className={classes.grid}>
      {heros.map((hero, index) => (
        <HeroCard key={hero.id} hero={hero} index={index} />
      ))}
    </ul>
  );
};

export default HerosGrid;
