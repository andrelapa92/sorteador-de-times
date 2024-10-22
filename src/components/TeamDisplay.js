import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

function TeamDisplay({ teams }) {
  console.log(teams);
  return (
    <div>
      {teams.map((team, index) => (
        <div key={index}>
          <h2>Time {index + 1}:</h2>
          <List>
            {team.map((player, playerIndex) => {
              const isFemale = player.isFemale; // Acessa a propriedade isFemale do objeto Player
              const icon = isFemale ? <FemaleIcon /> : <MaleIcon />;
              const bgColor = isFemale ? 'pink' : 'lightblue';

              return (
                <ListItem key={playerIndex}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        backgroundColor: bgColor, // Define a cor de fundo com base no gênero
                      }}
                    >
                      {icon} {/* Usa o ícone de gênero */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={player.getName()} /> {/* Exibe o nome do jogador */}
                </ListItem>
              );
            })}
          </List>
        </div>
      ))}
    </div>
  );
}

export default TeamDisplay;
