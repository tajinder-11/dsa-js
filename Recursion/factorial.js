function factorial(item) {
  if (item == 0) {
    return 1;
  } else {
    return item * factorial(item - 1);
  }
}

let data = 5;
const answer = factorial(data);
console.log(answer);
