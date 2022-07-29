import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { randomNumber, isEven } from '../lib/lib.js';

const roundsCount = 3;
let score = 0;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  const userName = greeting();
  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const number = randomNumber();
    const expectedAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  if (score === roundsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
