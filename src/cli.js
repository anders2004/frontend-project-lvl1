import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  const welcomeMessage = `Hello, ${name}!`;

  return welcomeMessage;
};

export default greeting;
