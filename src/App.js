import React, { useState } from 'react';
import InputForm from './components/InputForm';
import PlayerList from './components/PlayerList';
import TeamSorter from './components/TeamSorter';
import PlayerManager from './services/PlayerManager';
import { Box } from '@mui/material';

function App() {
  const [playerManager] = useState(new PlayerManager());
  const [teamCount, setTeamCount] = useState(2);
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = (player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
    playerManager.addPlayer(player);
  };

  const handleRemovePlayer = (index) => {
    setPlayers((prevPlayers) => prevPlayers.filter((_, idx) => idx !== index));
  };

  const handleSetTeamCount = (count) => {
    setTeamCount(count);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 className='title'>Sorteador de Times</h1>
        <InputForm 
          onAddPlayer={handleAddPlayer} 
          onSetTeamCount={handleSetTeamCount} 
        />
        <PlayerList 
          players={players} 
          onRemovePlayer={handleRemovePlayer} 
        />
        <TeamSorter 
          players={players} 
          teamCount={teamCount} 
        />
      </div>
    </Box>
  );
}

export default App;
