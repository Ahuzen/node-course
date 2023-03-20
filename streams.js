//const {writeFile} = require('fs/promises')
const {createReadStream} = require('fs')

//CREAR ARCHIVO 

/* const createBigFile = async () => {
    
    await writeFile('./data/bigFile.txt', 'Hello World'.repeat(100000))

}

createBigFile() */

const stream = createReadStream('./data/bigFile.txt', {
    encoding: 'utf-8'
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Finalizo lectura de archivo')
})

stream.on('error', (err) => {
    console.log(err)
})