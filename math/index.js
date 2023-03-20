
//metodo before

/* function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function mutliplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    return x / y;
} */

/* module.exports = {
    sumar,
    restar,
    mutliplicar,
    dividir
} */


//METODO CON MODULE

//exportar de maera individual

export function sumar(x, y) {
    return x + y;
}

export function restar(x, y) {
    return x - y;
}

export function mutliplicar(x, y) {
    return x * y;
}

export function dividir(x, y) {
    return x / y;
}

//export todo o individual
export default {
    sumar,
    restar,
    mutliplicar,
    dividir
}