let frase = "CaDena con MayUsCulAS"
var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var contador = 0;


const CantidadMayusculas = (frase) => {

    cadena = frase.replace(/\s/g, "");
    for (let i = 0; i < mayusculas.length; i++) {

        for (let x = 0; x < cadena.length; x++) {

            if (cadena[x] == mayusculas[i]) {
                contador += 1;
            }

        }

    }

    document.write("Cantidad de mayusculas: " + contador + "  Cantidad de letras: " + cadena.length);


}

CantidadMayusculas(frase);