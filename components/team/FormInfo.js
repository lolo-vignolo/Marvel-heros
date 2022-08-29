import React from 'react';

import classes from './team.module.css';

const FormInfo = ({
  handleSubmit,
  teamName,
  handleName,
  teamDescription,
  handleDescription,
}) => {
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.input}
        placeholder="Team Name..."
        name="title"
        value={teamName}
        onChange={handleName}
      />
      <textarea
        className={classes.textarea}
        placeholder="Description..."
        name="description"
        value={teamDescription}
        onChange={handleDescription}
      />

      <button className={classes.btn} type="submit">
        Add Info
      </button>
    </form>
  );
};

export default FormInfo;
