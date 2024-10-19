function TeamDisplay({ teams }) {
  return (
    <div>
      {teams.map((team, index) => (
        <div key={index}>
          <h2>Time {index + 1}:</h2>
          <ul>
            {team.map((player, playerIndex) => (
              <li key={playerIndex}>{player}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TeamDisplay;
