class Player {
    constructor(name, gender) {
        this.name = name;
        this.isFemale = gender === 'female'; // Define isFemale como booleano
    }
    
    getName() {
        return this.name;
    }
}

export default Player;
