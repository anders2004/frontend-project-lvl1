import gameEngine from '../index.js';
import getRandomNumber from '../lib/lib.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameData = () => {
  const gameQuestion = getRandomNumber();
  const expectedAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
