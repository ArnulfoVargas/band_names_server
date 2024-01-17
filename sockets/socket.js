const {io} = require('../index');
const Band = require('../models/band');
const Bands = require("../models/bands")

const bands = new Bands();

// Socket messages
io.on('connection', client => {
    client.emit("active-bands", bands.getBands())

    client.on('disconnect', () => {
        console.log('Client Disconnected')
    })

    client.on("vote-band", payload => {
        bands.voteBand(payload.id)
        io.emit("active-bands", bands.getBands())
    })

    client.on("add-band", payload => {
        bands.addBand(new Band(payload.name))
        io.emit("active-bands", bands.getBands())
    })

    client.on("delete-band", payload => {
        bands.deleteBand(payload.id)
        io.emit("active-bands", bands.getBands())
    })
})