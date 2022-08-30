import React from 'react';
import Image from 'next/image';

import classes from './footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.company}>
        <Image src="/pictures/comics.png" alt="logo" width={70} height={60} />
        <h4>Kubide & Marvel</h4>
        <Image src="/pictures/kubide.png" alt="logo" width={68} height={58} />
      </div>
      <div>
        <h6>CopyRight Lorenzo Vignolo 2022</h6>
      </div>
    </div>
  );
};

export default Footer;
