var numero = prompt("ingrese un numero");

let array = [];

const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var aleatorio = random(1, 200);


for (let i = 0; i < numero; i++) {
    array.push(aleatorio);
}


document.write(array);