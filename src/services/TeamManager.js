class TeamManager {
    constructor(players, teamCount) {
      this.players = players;
      this.teamCount = teamCount;
    }
  
    shufflePlayers() {
      return this.players.sort(() => Math.random() - 0.5);
    }
  
    sortTeams() {
      const shuffledPlayers = this.shufflePlayers();
      const teams = Array.from({ length: this.teamCount }, () => []);
  
      shuffledPlayers.forEach((player, index) => {
        const teamIndex = index % this.teamCount;
        teams[teamIndex].push(player);
      });
  
      return teams;
    }
  }
  
  export default TeamManager;
  