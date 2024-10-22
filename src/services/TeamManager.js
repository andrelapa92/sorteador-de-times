class TeamManager {
  constructor(players, teamCount) {
    this.players = players;
    this.teamCount = teamCount;
  }

  sortTeams() {
    // Separar jogadores por gênero
    const males = this.players.filter(player => !player.isFemale);
    const females = this.players.filter(player => player.isFemale);

    // Inicializar os times como arrays vazios
    const teams = Array.from({ length: this.teamCount }, () => []);

    // Função auxiliar para distribuir jogadores de forma balanceada
    const distributePlayers = (playersList) => {
      let teamIndex = 0;
      playersList.forEach(player => {
        teams[teamIndex].push(player); // Adiciona o jogador no time atual
        teamIndex = (teamIndex + 1) % this.teamCount; // Avança para o próximo time, em forma circular
      });
    };

    // Distribuir homens e mulheres nos times
    distributePlayers(males);
    distributePlayers(females);

    return teams;
  }
}

export default TeamManager;
