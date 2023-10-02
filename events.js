const EventEmitter = require('events')

//create an instance from the event module
const customEmitter = new EventEmitter() 

// in emmiting events, order matter.. we first listen for an event and then, emit to it
customEmitter.on('response', () => {
    console.log(`data received`)
})

//we can have several fxns listening to the same event
customEmitter.on('response', () => {
    console.log(`another function`)
})

//can also pass params in the event
customEmitter.on('response', (name, id) => {
    console.log(`data user ${name} with id:${id}`)
})

customEmitter.emit('response', 'Mike', 29)