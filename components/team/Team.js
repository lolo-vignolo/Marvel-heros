import React, { useEffect, useState } from 'react';

import { getInfoTeam, herosLocalStorage, infoTeam } from '../helpers/localTeam';
import Empty from './Empty';
import classes from './team.module.css';
import TeamList from './TeamList';

const Team = ({ herosStatic }) => {
  const [heros, setHeroes] = useState(herosLocalStorage());
  const [herosInfo, setHerosInfo] = useState([]);

  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');

  const [getInfoStoreage, setGetInfoStoreage] = useState({});

  const { teamDescription: description, teamName: name } = getInfoStoreage;

  const information = {
    teamName,
    teamDescription,
  };

  useEffect(() => {
    if (heros.length > 0) {
      setHerosInfo(
        heros?.map((hero) =>
          herosStatic.find((heroStatic) => heroStatic.id == hero)
        )
      );
    }
  }, [heros, herosStatic]);

  const handleName = (e) => {
    setTeamName(e.target.value);
  };

  const handleDescription = (e) => {
    setTeamDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    infoTeam(information);
    setGetInfoStoreage(getInfoTeam());
    setTeamName('');
    setTeamDescription('');
  };

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className={classes.container}>
        {!heros.length > 0 ? <Empty /> : <TeamList info={herosInfo} />}
      </div>
      <div>
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

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Team;
