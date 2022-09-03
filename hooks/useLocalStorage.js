import { useState } from 'react';

import { getInfoTeam, herosLocalStorage, infoTeam } from '../helpers/localTeam';

export const useLocalStorage = () => {
  const [heros, setHeroes] = useState(herosLocalStorage());
  const [herosInfo, setHerosInfo] = useState([]);

  const [teamInfo, setTeamInfo] = useState({
    teamName: '',
    teamDescription: '',
  });

  const [getInfoStoreage, setGetInfoStoreage] = useState({});

  const handleTeamInfo = ({ target }) => {
    const { name, value } = target;

    const newInfo = {
      ...teamInfo,
      [name]: value,
    };

    setTeamInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    infoTeam(teamInfo);
    setGetInfoStoreage(getInfoTeam());
    setTeamInfo({
      teamName: '',
      teamDescription: '',
    });
  };

  return {
    heros,
    setHeroes,
    herosInfo,
    setHerosInfo,
    teamInfo,
    getInfoStoreage,
    setGetInfoStoreage,
    handleTeamInfo,
    handleSubmit,
  };
};
