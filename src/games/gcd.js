import gameEngine from '../index.js';
import getRandomNumber from '../lib/lib.js';

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
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = `${gcd(firstNumber, secondNumber)}`;

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
