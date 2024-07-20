const arr = [1, 2, 3, 4, 5];
const brr = [6, 7, 8, 9];
const crr = new Array(arr.length + brr.length);

for (let i = 0; i < arr.length; i++) {
  crr[i] = arr[i];
}

for (let i = 0; i < brr.length; i++) {
  crr[arr.length + i] = brr[i];
}

for (let i = 0; i < crr.length; i++) {
  console.log(crr[i]);
}
