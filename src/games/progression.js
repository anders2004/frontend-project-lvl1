import gameEngine from '../index.js';
import randomNumber from '../lib/lib.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionLength = 10;
  const progressionStart = randomNumber();
  const progressionStep = randomNumber(10);
  const progression = [progressionStart];

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  return progression;
};

const gameData = () => {
  const progression = getProgression();
  const progressionHiddenNumberIndex = randomNumber(10);
  const progressionHiddenSymbol = '..';
  const expectedAnswer = `${progression[progressionHiddenNumberIndex]}`;
  progression[progressionHiddenNumberIndex] = progressionHiddenSymbol;
  const gameQuestion = progression.join(' ');

  return [gameQuestion, expectedAnswer];
};

export default () => gameEngine(gameDescription, gameData);
