function unique(arr) {
  let i, j;

  for (i = 0; i < arr.length; i++) {
    let c = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        c++;
      }
    }
    if (c === 1) {
      console.log(arr[i]);
    }
  }
}

const arr = [1, 2, 2, 4, 6, 6, 9];

unique(arr);
