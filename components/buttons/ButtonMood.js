import React from 'react';

import { FaMoon, FaRegSun } from 'react-icons/fa';
import classes from './buttons.module.css';

const ButtonMood = ({ toggleDarkMode }) => {
  return (
    <button className={classes.btn} onClick={() => toggleDarkMode()}>
      <span
        style={{
          marginRight: '4px',
          marginTop: '4px',
          fontSize: '1.5rem',
        }}
      >
        <FaRegSun />
      </span>

      <span style={{ marginLeft: '4px', marginTop: '4px', fontSize: '1.5rem' }}>
        <FaMoon />
      </span>
    </button>
  );
};

export default ButtonMood;
