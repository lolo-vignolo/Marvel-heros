export const toggleLocalTeam = (id) => {
  if (typeof window === 'undefined') {
    return [];
  }
  let team = JSON.parse(localStorage.getItem('team') || '[]');

  if (team.includes(id)) {
    team = team.filter((hero) => hero !== id);
  } else {
    team.push(id);
  }

  localStorage.setItem('team', JSON.stringify(team));
};

export const existInTeam = (id) => {
  if (typeof window === 'undefined') {
    return false;
  }
  const team = JSON.parse(localStorage.getItem('team') || '[]');

  return team.includes(id);
};

export const herosLocalStorage = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const team = JSON.parse(localStorage.getItem('team') || '[]');

  return team;
};

export const infoTeam = (information) => {
  if (typeof window === 'undefined') {
    return false;
  }

  localStorage.setItem('info', JSON.stringify(information));
};

export const getInfoTeam = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const info = JSON.parse(localStorage.getItem('info'));

  return info;
};
