import React, { useState } from 'react';
import TeamDisplay from './TeamDisplay';
import TeamManager from '../services/TeamManager';
import { Button } from '@mui/material';

function TeamSorter({ players, teamCount }) {

  const [teams, setTeams] = useState(null);

  const handleSortTeams = () => {
    const teamManager = new TeamManager(players, teamCount);
    const sortedTeams = teamManager.sortTeams();
    setTeams(sortedTeams);
  };

  return (
    <div>
      <Button onClick={handleSortTeams} variant="contained" color="success">Sortear Times</Button>
      {teams && <TeamDisplay teams={teams} />}
    </div>
  );
}

export default TeamSorter;
