import gameEngine from '../index.js';
import { randomNumber, gcd } from '../lib/lib.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const gameQuestion = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = `${gcd(firstNumber, secondNumber)}`;

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
