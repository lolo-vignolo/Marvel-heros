import React from 'react';
import confetti from 'canvas-confetti';

import classes from './team.module.css';

const FormInfo = ({ handleSubmit, handleTeamInfo, teamInfo }) => {
  const handleClick = () => {
    confetti({
      zIndex: 999,
      particleCount: 200,
      spread: 200,
      angle: 90,
      startVelocity: 60,
      origin: {
        x: 0.5,
        y: 0.9,
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        placeholder="Team Name..."
        name="teamName"
        value={teamInfo.teamName}
        onChange={handleTeamInfo}
      />
      <textarea
        className={classes.textarea}
        placeholder="Description..."
        name="teamDescription"
        value={teamInfo.teamDescription}
        onChange={handleTeamInfo}
      />

      <button onClick={handleClick} className={classes.btn} type="submit">
        Add Info
      </button>
    </form>
  );
};

export default FormInfo;
