const {io} = require('../index')

// Socket messages
io.on('connection', client => {
    console.log("Client connected")

    client.on('disconnect', () => {
        console.log('Client Disconnected')
    })

    client.on('msg', msg => {
        console.log(msg)
        io.emit('msg', {name: "Juan"})
    })
})