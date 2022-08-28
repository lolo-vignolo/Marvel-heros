import Image from 'next/image';

import classes from './logo.module.css';

function Logo() {
  return (
    <div className={classes.divlog}>
      <div className={classes.imgBox}>
        <Image
          src="/pictures/marvelLogo.png"
          alt="logo"
          width={200}
          height={140}
          className={classes.img}
        />
      </div>
    </div>
  );
}

export default Logo;
