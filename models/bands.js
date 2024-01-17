const Band = require("./band");

class Bands {
    constructor() {
        this.bands = [];
    }

    addBand(band = new Band()){
        this.bands.push(band);
    }

    getBands() {
        return this.bands;
    }

    deleteBand(id = "") {
        this.bands = this.bands.filter(b => b.id !== id);
        return this.bands;
    }

    voteBand(id = "") {
        let band = this.bands.find(b => b.id === id);
        band.votes++;
    }
}

module.exports = Bands