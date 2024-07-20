const arr = [1, 2, 3, 4, 5];
const brr = [6, 7, 8, 9];
const crr = [];

let i = 0;
let j = 0;
let k = 0;

while (i < arr.length && j < brr.length) {
  if (arr[i] < brr[j]) {
    crr[k] = arr[i];
    i++;
  } else {
    crr[k] = brr[j];
    j++;
  }
  k++;
}

while (i < arr[i]) {
  crr[k] = arr[i];
  i++;
  k++;
}

while (j < brr.length) {
  crr[k] = brr[j];
  j++;
  k++;
}
console.log(crr);
