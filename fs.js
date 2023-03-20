const fs = require('fs');

const fisrt = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt', 'utf-8')

console.log(fisrt);
console.log(second.toString());

const title = ' se agrego nueva informacion'

fs.writeFileSync('./data/cuatro.txt', title, {
    flag: 'a'
});


//archivos modo sincrono

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data);
})