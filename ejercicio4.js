let array = [4, 1, 7, 9, 8, 2, 24, 22]


const ordernar = (array) => {
    array.sort((a, b) => {
        if (a == b) {
            return 0
        }
        if (a < b) {
            return -1;
        }
        return 1;
    })
}

ordernar(array);

document.write(array);