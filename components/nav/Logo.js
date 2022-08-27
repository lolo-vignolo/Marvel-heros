import Image from 'next/image';
import classes from './logo.module.css';
// import { logo } from '../../public/reactlogo.png';
function Logo() {
  return (
    <div className={classes.divlog}>
      <div>
        <Image
          src="/pictures/logo.png"
          alt="logo"
          width={50}
          height={50}
          className={classes.img}
        />
      </div>
      <div className={classes.logo}>home</div>
    </div>
  );
}

export default Logo;
