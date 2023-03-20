const {readFile} = require('fs/promises');
const {promisify} = require('util');


/// Promise before

/* const getText = (pathFile) => {
    
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (error, data) => {
            if (error) {
                reject(error)
            }
            resolve(data);
        })
    })

} */

//utilizando then

/* getText('./data/cuatro.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/second.txt'))
    .then(result => console.log(result))
    .catch(errro => console.log(errro)) */


//async await
/* async function read() {
    try {
        
        const result = await getText('./data/first.txt');
        const result2 = await getText('./data/second.txt');
        const result3 = await getText('./data/tercer.txt');
        const result4 = await getText('./data/cuatro.txt');

        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);

    } catch (error) {
        console.log(error)
    }
}

read() */


///UTILIZANDO PORMISIFY

/* const readFilePromise = promisify(readFile);

async function read() {
    try {
        
        const result = await readFilePromise('./data/first.txt', 'utf-8');
        const result2 = await readFilePromise('./data/second.txt', 'utf-8');
        const result3 = await readFilePromise('./data/tercer.txt', 'utf-8');
        const result4 = await readFilePromise('./data/cuatro.txt', 'utf-8');

        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);

    } catch (error) {
        console.log(error)
    }
}

read() */


///READFILE CON PROMESA INCLUIDA


async function read() {
    try {
        
        const result = await readFile('./data/first.txt', 'utf-8');
        const result2 = await readFile('./data/second.txt', 'utf-8');
        const result3 = await readFile('./data/tercer.txt', 'utf-8');
        const result4 = await readFile('./data/cuatro.txt', 'utf-8');

        console.log(result);
        console.log(result2);
        console.log(result3);
        console.log(result4);

    } catch (error) {
        console.log(error)
    }
}

read()