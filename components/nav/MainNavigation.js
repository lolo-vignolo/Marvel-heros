import React from 'react';
import Link from 'next/link';

import Logo from './Logo';
import classes from './main-navigation.module.css';
import ButtonMood from '../buttons/ButtonMood';

function MainNavigation({ toggleDarkMode }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <div>
              <ButtonMood toggleDarkMode={toggleDarkMode} />
            </div>
          </li>
          <li>
            <Link href="/team">
              <a>My Team</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
