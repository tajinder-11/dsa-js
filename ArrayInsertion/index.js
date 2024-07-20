let data = [60, 20, 30, 40, 10];
let newEl = 12;
let position = 2 - 1;

console.log('Before Insertion ', data);

for (let i = data.length - 1; i >= position; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i === position) {
      data[i] = newEl;
    }
  }
}
console.log('After Insertion ', data);
