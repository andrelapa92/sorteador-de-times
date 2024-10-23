import React, { useState } from 'react';
import { Typography, TextField, Button, FormControlLabel, Switch, InputAdornment, Box } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Player from './Player';

function InputForm({ onAddPlayer, onSetTeamCount }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male'); // Use 'male' ou 'female' como string
  const [teamCount, setTeamCount] = useState(2); // Valor inicial 2 para a quantidade de times

  // Função para adicionar jogador
  const handleAddPlayer = () => {
    if (name.trim()) {
      const player = new Player(name, gender); // Cria a instância de Player
      onAddPlayer(player);
      setName(''); // Limpa o campo de entrada após adicionar
    }
  };

  // Função para mudar o gênero ao alternar o Switch
  const handleGenderChange = (event) => {
    setGender(event.target.checked ? 'female' : 'male');
  };

  // Funções para incrementar e decrementar a quantidade de times
  const handleIncrement = () => {
    setTeamCount(prevCount => prevCount + 1);
    onSetTeamCount(teamCount + 1); // Atualiza o valor no estado do componente pai
  };

  const handleDecrement = () => {
    if (teamCount > 1) {
      setTeamCount(prevCount => prevCount - 1);
      onSetTeamCount(teamCount - 1); // Atualiza o valor no estado do componente pai
    }
  };

  return (
    <div>
      <Box sx={{ marginTop: 2 }}>
        <TextField
          label="Nome do jogador"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={gender === 'female'}
                        onChange={handleGenderChange}
                        color="primary"
                        size="small"
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
                          borderRadius: '50%',
                          backgroundColor: gender === 'female' ? 'pink' : 'lightblue',
                          marginLeft: '8px',
                        }}
                      >
                        {gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
                      </Box>
                    }
                    labelPlacement="start"
                  />
                </InputAdornment>
              )
            }
          }}
        />
      </Box>

      {/* Controle da quantidade de times */}


      <Box sx={{ textAlign: 'center', marginTop: 2 }}>  {/* Centraliza o conteúdo e adiciona margem */}
      <Typography variant="body2" component="label" gutterBottom sx={{ color: 'gray' }}>
        Quantidade de times
      </Typography>

        
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}> {/* Espaçamento entre label e controle */}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleDecrement} 
            disabled={teamCount <= 2}
            sx={{ minWidth: '40px' }}
          >
            -
          </Button>

          <TextField
            value={teamCount}
            slotProps={{
              htmlInput: { 
                readOnly: true,  // Evita a edição manual
                min: 1,
                style: { textAlign: 'center' }
              }
            }}
            sx={{ width: '50px', marginX: 2 }}
          />

          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleIncrement} 
            sx={{ minWidth: '40px' }}
          >
            +
          </Button>
        </Box>
      </Box>


      <Button 
        onClick={handleAddPlayer} 
        variant="contained" 
        color="primary" 
        sx={{ marginTop: 2 }}
      >
        Adicionar Jogador
      </Button>
    </div>
  );
}

export default InputForm;
