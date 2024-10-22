import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Switch, Box } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Player from './Player';

function InputForm({ onAddPlayer, onSetTeamCount }) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male'); // 'male' ou 'female'

    const handleAddPlayer = () => {
        if (name.trim()) {
            const player = new Player(name, gender); // Cria a instância de Player com o gênero correto
            onAddPlayer(player);
            setName(''); // Limpa o campo de entrada após adicionar
        }
    };

    const handleGenderChange = (event) => {
        setGender(event.target.checked ? 'female' : 'male'); // Atualiza o gênero baseado no estado do Switch
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={gender === 'female'} // O Switch é ativado se o gênero for feminino
                        onChange={handleGenderChange} // Atualiza o gênero ao mudar o switch
                        color="primary"
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
                            borderRadius: '50%', // Fundo redondo
                            backgroundColor: gender === 'female' ? 'pink' : 'lightblue', // Cor de fundo
                            marginRight: '8px' // Espaçamento entre o ícone e o switch
                        }}
                    >
                        {gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
                    </Box>
                }
            />
            <Box sx={{ marginTop: 2 }}> {/* Espaçamento entre o switch e o input */}
                <TextField
                    label="Nome do jogador"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
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
