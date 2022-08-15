import gameEngine from '../index.js';
import randomNumber from '../lib/lib.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
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


const gameData = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = `${gcd(firstNumber, secondNumber)}`;

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
