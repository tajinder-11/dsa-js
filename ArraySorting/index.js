let data = [40, 30, 12, 25, 2, 4, 34, 14, 65, 98, 900, 23, 54];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log('Data is ' + data);
