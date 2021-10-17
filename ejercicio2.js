let array = [1, 2, 3, 4, 5, 7]
let newArray = [];


const pasarArray = (array, newArray) => {

    let value = 0;
    for (let i = 0; i < array.length; i++) {

        value = array[i] + 1;
        newArray.push(value);
    }
}


pasarArray(array, newArray);

document.write(newArray)