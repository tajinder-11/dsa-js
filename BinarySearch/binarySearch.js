function search(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log('MID', mid);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let target = 5;

let ans = search(arr, target);
console.log(`The element is at ${ans}th index`);
