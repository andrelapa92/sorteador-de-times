function PlayerList({ players }) {
  console.log(players);
  return (
    <div>
      {players.length > 0 ? (
        <div>
          <br />
          <h2>Jogadores:</h2>
          <ul>
            {players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
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
  