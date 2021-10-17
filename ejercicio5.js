let var1 = [1, 2, 4, 6, 7, 8];
let var2 = [1, 2, 4, 5, 6, 7, 8]

const combinar = (var1, var2) => {

    let newArray = [];

    while (var1.length && var2.length) {
        let primerElemento;

        if (var1[0] < var2[0]) {
            primerElemento = var1.shift();
        } else {
            primerElemento = var2.shift()
        }
        newArray.push(primerElemento);

    }

    newArray = newArray.concat(var1).concat(var2);

    return newArray;


}




document.write(combinar(var1, var2));