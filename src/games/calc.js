import runGame from '../index.js';
import getRandomNumber from '../lib/lib.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return `${firstNumber + secondNumber}`;
    case '-':
      return `${firstNumber - secondNumber}`;
    case '*':
      return `${firstNumber * secondNumber}`;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getGameData = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const gameQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = calculate(firstNumber, secondNumber, operator);
  return [gameQuestion, expectedAnswer];
};

export default () => runGame(gameDescription, getGameData);
