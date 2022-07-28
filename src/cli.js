import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const welcomeMessage = `Hello, ${name}!`;
  console.log(welcomeMessage);

  return name;
};

export default greeting;
