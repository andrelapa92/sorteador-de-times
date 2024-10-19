class PlayerManager {
    constructor() {
      this.players = [];
    }
  
    addPlayer(name) {
      if (name) {
        this.players.push(name);
      }
    }
  
    getPlayers() {
      return this.players;
    }
  
    clearPlayers() {
      this.players = [];
    }
  }
  
  export default PlayerManager;
  