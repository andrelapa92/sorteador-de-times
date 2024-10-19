import React, { useState } from 'react';
import InputForm from './components/InputForm';
import PlayerList from './components/PlayerList';
import TeamSorter from './components/TeamSorter';
import PlayerManager from './services/PlayerManager';
import { Box } from '@mui/material';

function App() {
  const [playerManager] = useState(new PlayerManager());
  const [teamCount, setTeamCount] = useState(2); // Valor inicial de 2 times

  const handleAddPlayer = (name) => {
    playerManager.addPlayer(name);
  };

  const handleSetTeamCount = (count) => {
    setTeamCount(count);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centraliza horizontalmente
          alignItems: 'center',     // Centraliza verticalmente
          minHeight: '100vh',       // Ocupa a altura total da janela
        }}
      >
        <div>
          <h1 className='title'>Sorteador de Times</h1>
          <InputForm 
            onAddPlayer={handleAddPlayer} 
            onSetTeamCount={handleSetTeamCount} 
          />
          <PlayerList players={playerManager.getPlayers()} />
          <TeamSorter 
            players={playerManager.getPlayers()} 
            teamCount={teamCount} 
          />
        </div>
      </Box>
      
    </div>
  );
}

export default App;
