function bifrication(arr) {
  let j = 0;
  let k = 0;
  const even = [];
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even[j] = arr[i];
      j++;
    }
    if (arr[i] % 2 !== 0) {
      odd[k] = arr[i];
      k++;
    }
  }

  console.log("Even one's: ");
  for (let i = 0; i < j; i++) {
    console.log(even[i]);
  }
  console.log("Odd one's: ");
  for (let i = 0; i < k; i++) {
    console.log(odd[i]);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bifrication(arr);
