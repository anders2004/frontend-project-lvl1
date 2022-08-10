import readlineSync from 'readline-sync';

const gameEngine = (gameDescription, gameData) => {
  const gameRounds = 3;
  let gameScore = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < gameRounds; i += 1) {
    const [gameQuestion, expectedAnswer] = gameData();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct');
      gameScore += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (gameScore === gameRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameEngine;
