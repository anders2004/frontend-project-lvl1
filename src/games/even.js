import gameEngine from '../index.js';
import getRandomNumber from '../lib/lib.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameData = () => {
  const gameQuestion = getRandomNumber();
  const expectedAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
