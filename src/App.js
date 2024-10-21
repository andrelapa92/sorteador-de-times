import React, { useState } from 'react';
import InputForm from './components/InputForm';
import PlayerList from './components/PlayerList';
import TeamSorter from './components/TeamSorter';
import { Box } from '@mui/material';

function App() {
  const [players, setPlayers] = useState([]);  // Usar o estado do React para os jogadores
  const [teamCount, setTeamCount] = useState(2); // Valor inicial de 2 times

  // Função para adicionar um jogador
  const handleAddPlayer = (name) => {
    setPlayers((prevPlayers) => [...prevPlayers, name]);  // Atualiza o estado dos jogadores
  };

  // Função para atualizar a quantidade de times
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
          textAlign: 'center',      // Centraliza o texto
        }}
      >
        <div>
          <h1 className='title'>Sorteador de Times</h1>
          <br />
          <InputForm 
            onAddPlayer={handleAddPlayer} 
            onSetTeamCount={handleSetTeamCount} 
          />
          <PlayerList players={players} />
          <TeamSorter 
            players={players}
            teamCount={teamCount} 
          />
        </div>
      </Box>
    </div>
  );
}

export default App;
