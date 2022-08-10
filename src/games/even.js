import gameEngine from '../index.js';
import { randomNumber, isEven } from '../lib/lib.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const gameQuestion = randomNumber();
  const expectedAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return [gameDescription, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
