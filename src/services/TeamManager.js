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

    // Função para distribuir homens de forma crescente no índice dos times
    const distributeMales = (playersList) => {
      let teamIndex = 0;
      playersList.forEach(player => {
        teams[teamIndex].push(player); // Adiciona o jogador no time atual
        teamIndex = (teamIndex + 1) % this.teamCount; // Avança para o próximo time, em forma circular
      });
    };

    // Função para distribuir mulheres de forma decrescente no índice dos times
    const distributeFemales = (playersList) => {
      let teamIndex = this.teamCount - 1; // Começa pelo último time
      playersList.forEach(player => {
        teams[teamIndex].push(player); // Adiciona o jogador no time atual
        teamIndex = (teamIndex - 1 + this.teamCount) % this.teamCount; // Retrocede para o time anterior, em forma circular
      });
    };

    // Distribuir homens e mulheres nos times
    distributeMales(shuffledMales); // Distribui os homens em ordem crescente
    distributeFemales(shuffledFemales); // Distribui as mulheres em ordem decrescente

    return teams;
  }
}

export default TeamManager;
