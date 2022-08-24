import gameEngine from '../index.js';
import getRandomNumber from '../lib/lib.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, operator) => {
  let result = '';
  switch (operator) {
    case '+':
      result = `${firstNumber + secondNumber}`;
      break;
    case '-':
      result = `${firstNumber - secondNumber}`;
      break;
    case '*':
      result = `${firstNumber * secondNumber}`;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }

  return result;
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length)];
  const gameQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = calculate(firstNumber, secondNumber, operator);
  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, getGameData);
