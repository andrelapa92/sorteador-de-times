import React, { useState } from 'react';
import TeamDisplay from './TeamDisplay';
import TeamManager from '../services/TeamManager';
import { Button, CircularProgress } from '@mui/material';

function TeamSorter({ players, teamCount }) {
  const [teams, setTeams] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento

  const handleSortTeams = () => {
    setLoading(true); // Inicia o carregamento
    const teamManager = new TeamManager(players, teamCount);
    const sortedTeams = teamManager.sortTeams();
    setTeams(sortedTeams);
    setLoading(false); // Finaliza o carregamento
  };

  return (
    <div>
      <Button 
        onClick={handleSortTeams} 
        variant="contained" 
        color="success" 
        disabled={loading} // Desabilita o botão enquanto está carregando
        startIcon={loading ? <CircularProgress size={20} /> : null} // Mostra ícone de carregamento
      >
        {loading ? 'Sorteando...' : 'Sortear Times'} {/* Texto do botão */}
      </Button>
      {teams && <TeamDisplay teams={teams} />}
    </div>
  );
}

export default TeamSorter;
