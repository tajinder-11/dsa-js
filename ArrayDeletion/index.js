const data = [12, 13, 14, 15, 16, 17, 18, 19];
const position = 3;

for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);
