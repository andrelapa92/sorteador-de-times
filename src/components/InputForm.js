import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Switch, InputAdornment, Box } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Player from './Player';

function InputForm({ onAddPlayer, onSetTeamCount }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male'); // Use 'male' ou 'female' como string

  const handleAddPlayer = () => {
    if (name.trim()) {
      const player = new Player(name, gender); // Cria a instância de Player
      onAddPlayer(player);
      setName(''); // Limpa o campo de entrada após adicionar
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.checked ? 'female' : 'male'); // Muda o gênero baseado no estado do Switch
  };

  return (
    <div>
      <Box sx={{ marginTop: 2 }}> {/* Espaçamento entre o switch e o input */}
        <TextField
          label="Nome do jogador"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FormControlLabel
                  control={
                    <Switch
                      checked={gender === 'female'} // Checa se o gênero é feminino
                      onChange={handleGenderChange} // Atualiza o gênero ao mudar o switch
                      color="primary"
                      size="small" // Faz o switch menor para caber bem ao lado
                    />
                  }
                  label={
                    <Box 
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%', // Faz o fundo ser redondo
                        backgroundColor: gender === 'female' ? 'pink' : 'lightblue', // Cor de fundo
                        marginLeft: '8px', // Espaçamento entre o switch e o ícone
                      }}
                    >
                      {gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
                    </Box>
                  }
                  labelPlacement="start" // Coloca o ícone ao lado do switch
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button 
        onClick={handleAddPlayer} 
        variant="contained" 
        color="primary" 
        style={{ marginTop: '8px' }}
      >
        Adicionar Jogador
      </Button>
    </div>
  );
}

export default InputForm;
