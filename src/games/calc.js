import gameEngine from '../index.js';
import getRandomNumber from '../lib/lib.js';

const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = operators[getRandomNumber(0, 3)];
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
