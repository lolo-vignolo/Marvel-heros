import Image from 'next/image';
import classes from './logo.module.css';
// import { logo } from '../../public/reactlogo.png';
function Logo() {
  return (
    <div className={classes.divlog}>
      <div className={classes.imgBox}>
        <Image
          src="/pictures/logo.png"
          alt="logo"
          width={70}
          height={70}
          className={classes.img}
        />
      </div>
      <div className={classes.logo}>Home</div>
    </div>
  );
}

export default Logo;
