import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function InputForm({ onAddPlayer }) {
  const [name, setName] = useState('');

  const handleAddPlayer = () => {
    if (name.trim()) {
      onAddPlayer(name);
      setName('');  // Limpa o campo de entrada após adicionar
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        width: '100%',
      }}
    >
      <TextField
        label="Nome do jogador"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth  // O campo de entrada ocupa toda a largura disponível
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleAddPlayer}
                  edge="end"
                  color="primary"
                  sx={{ height: '100%' }}  // Garante que o botão tenha a mesma altura do input
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}

export default InputForm;
