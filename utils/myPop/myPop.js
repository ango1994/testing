export function myPop() {
    const len = this.length - 1;
    const value = this[len];
    this.length = len;
    delete this[len];
    return value;

    // Prueba

    // const element = arr[myLength(arr) - 1];
    // const pepe = Object.assign({}, arr);
    // delete pepe[myLength(arr) - 1];
    // arr = Object.values(pepe);
    // return element;
}

let prueba = 3;
