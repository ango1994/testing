import { myLength } from "../myLength/myLength";

export function myPush(arr, element) {
    arr[myLength(arr)] = element;
    return myLength(arr);
}
