export const randomNumber = (max = 100) => Math.floor(Math.random() * max);

export const isEven = (number) => number % 2 === 0;

export const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  if (a === 0) return b;

  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};
