import gameEngine from '../index.js';
import { randomNumber } from '../lib/lib.js';

const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const operator = operators[randomNumber(3)];
  let expectedAnswer = '';
  const gameQuestion = `${firstNumber} ${operator} ${secondNumber}`;

  if (operator === '+') {
    expectedAnswer = `${firstNumber + secondNumber}`;
  } else if (operator === '-') {
    expectedAnswer = `${firstNumber - secondNumber}`;
  } else if (operator === '*') {
    expectedAnswer = `${firstNumber * secondNumber}`;
  }

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
