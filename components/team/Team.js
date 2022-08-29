import React, { useEffect, useState } from 'react';

import TeamList from './TeamList';
import Empty from '../emptySearch/Empty';

import classes from './team.module.css';
import {
  getInfoTeam,
  herosLocalStorage,
  infoTeam,
} from '../../helpers/localTeam';
import FormInfo from './FormInfo';

const Team = ({ herosStatic }) => {
  const [heros, setHeroes] = useState(herosLocalStorage());
  const [herosInfo, setHerosInfo] = useState([]);

  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');

  const [getInfoStoreage, setGetInfoStoreage] = useState({});

  const information = {
    teamName,
    teamDescription,
  };

  useEffect(() => {
    setGetInfoStoreage(getInfoTeam());
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

  const empty = {
    height: 600,
    width: 800,
    text: `No Heroes. Build your team!`,
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {!heros.length > 0 ? (
          <Empty
            picture="/pictures/hero.png"
            height={empty.height}
            width={empty.width}
            text={empty.text}
          />
        ) : (
          <>
            <div className={classes.information}>
              <h1>Team: {getInfoStoreage ? getInfoStoreage.teamName : ''}</h1>
              <p>
                <span style={{ color: '#ef5350' }}>Description: </span>
                {getInfoStoreage ? getInfoStoreage.teamDescription : ''}
              </p>
            </div>
            <hr className={classes.hr} />
            <TeamList info={herosInfo} />
          </>
        )}
      </div>
      <div>
        {heros.length > 0 ? (
          <FormInfo
            handleName={handleName}
            handleDescription={handleDescription}
            handleSubmit={handleSubmit}
            teamName={teamName}
            teamDescription={teamDescription}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Team;
