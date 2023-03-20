const {EventEmitter} = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) => {
    console.log('Recibido')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('response', 'Hello', [1,2,3])
/* customEmitter.emit('response', 20)
customEmitter.emit('response', [1,2,3])
customEmitter.emit('response', {name: 'user'}) */