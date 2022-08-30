import { useState } from 'react';

import { getInfoTeam, herosLocalStorage, infoTeam } from '../helpers/localTeam';

export const useLocalStorage = () => {
  const [heros, setHeroes] = useState(herosLocalStorage());
  const [herosInfo, setHerosInfo] = useState([]);

  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');

  const [getInfoStoreage, setGetInfoStoreage] = useState({});

  const information = {
    teamName,
    teamDescription,
  };

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

  return {
    heros,
    setHeroes,
    herosInfo,
    setHerosInfo,
    teamName,
    teamDescription,
    getInfoStoreage,
    setGetInfoStoreage,
    handleName,
    handleDescription,
    handleSubmit,
  };
};
