import React, { useState } from 'react';
import { Button } from '@mui/material';

function InputForm({ onAddPlayer, onSetTeamCount }) {
  const [name, setName] = useState('');
  const [teamCount, setTeamCount] = useState(2); // Valor padrão: 2 times

  const handleAddPlayer = () => {
    if (name) {
      onAddPlayer(name);
      setName('');
    }
  };

  const handleTeamCountChange = (e) => {
    const count = parseInt(e.target.value);
    setTeamCount(count);
    onSetTeamCount(count);
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nome do jogador" 
      />
      <Button onClick={handleAddPlayer}>Adicionar jogador</Button>

      <div>
        <label>Número de times:</label>
        <input 
          type="number"
          value={teamCount}
          onChange={handleTeamCountChange}
          min="2"
        />
      </div>
    </div>
  );
}

export default InputForm;
