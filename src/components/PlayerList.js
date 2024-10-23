import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import DeleteIcon from '@mui/icons-material/Delete';

function PlayerList({ players, onRemovePlayer }) {
  return (
    <div>
      {players.length > 0 ? (
        <div>
          <br />
          {/* Título com a contagem de jogadores */}
          <h2>Jogadores adicionados ({players.length}):</h2>
          <List variant="outlined">
            {players.map((player, index) => {
              const isFemale = player.isFemale; // Acessa a propriedade isFemale
              const icon = isFemale ? <FemaleIcon /> : <MaleIcon />;
              const bgColor = isFemale ? 'pink' : 'lightblue';

              return (
                <ListItem 
                  key={index} 
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onRemovePlayer(index)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar 
                      sx={{
                        backgroundColor: bgColor, // Cor de fundo com base no gênero
                      }}
                    >
                      {icon} {/* Usa o ícone baseado no gênero */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={player.getName()} /> {/* Usa o método getName() */}
                </ListItem>
              );
            })}
          </List>
          <br />
        </div>
      ) : (
        <div>
          <br />
          <p>Nenhum jogador adicionado ainda.</p>
          <br />
        </div>
      )}
    </div>
  );
}

export default PlayerList;
