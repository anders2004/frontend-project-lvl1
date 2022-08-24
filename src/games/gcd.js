import gameEngine from '../index.js';
import getRandomNumber from '../lib/lib.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const a = num1;
  const b = num2;

  if (!b) return a;

  return gcd(b, a % b);
};

const gameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = `${gcd(firstNumber, secondNumber)}`;

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
