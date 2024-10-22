import React, { useState } from 'react';
import InputForm from './components/InputForm';
import PlayerList from './components/PlayerList';
import TeamSorter from './components/TeamSorter';
import PlayerManager from './services/PlayerManager';
import { Box } from '@mui/material';
import Footer from './components/Footer';

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
    <div>
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
        <h1 className='title-personal'>Sorteador de Times</h1>
        <p className='subtitle-personal'>(Para o vôlei dos cria)</p>
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
    <Footer />
    </div>
  );
}

export default App;
