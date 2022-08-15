import gameEngine from '../index.js';
import randomNumber from '../lib/lib.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameData = () => {
  const gameQuestion = randomNumber();
  const expectedAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
