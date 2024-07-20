const data = [20, 30, 40, 50, 70, 80, 90];

const item = 40;

for (let i = 0; i < data.length; i++) {
  if (data[i] === item) {
    console.log('The element is present at ', i);
    break;
  }
}
