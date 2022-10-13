export function myLength(array) {
    let count = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        count++;
    }
    return count;
}
