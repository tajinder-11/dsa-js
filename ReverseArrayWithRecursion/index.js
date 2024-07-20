const data = [1, 2, 3, 4, 5, 6, 7, 8];

let temp;

function customReverse(data, start, end) {
  console.log('Data', data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);
