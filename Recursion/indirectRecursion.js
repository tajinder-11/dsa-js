let money = 100;
let totalApple = 0;
let applePrice = 10;

function buyApple(x) {
  if (x > 0) {
    console.log('I have', x, 'RS', totalApple);
    buyMore(x);
  } else {
    console.log('i dont have more money', totalApple);
  }
}

function buyMore(x) {
  totalApple++;
  buyApple(x - applePrice);
}

buyApple(money);
