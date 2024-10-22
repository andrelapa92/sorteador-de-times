class TeamManager {
  constructor(players, teamCount) {
    this.players = players;
    this.teamCount = teamCount;
  }

  // Função auxiliar para embaralhar (shuffle) um array
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
  }

  sortTeams() {
    // Separar jogadores por gênero
    const males = this.players.filter(player => !player.isFemale);
    const females = this.players.filter(player => player.isFemale);

    // Embaralhar os homens e as mulheres
    const shuffledMales = this.shuffleArray([...males]); // Faz uma cópia e embaralha
    const shuffledFemales = this.shuffleArray([...females]);

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
    distributePlayers(shuffledMales);
    distributePlayers(shuffledFemales);

    return teams;
  }
}

export default TeamManager;
