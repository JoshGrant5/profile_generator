const { royalblue } = require('color-name');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ["What's your name? Nicknames are also acceptable: ", 
"What's an activity you like doing?: ",
"What do you listen to while doing that?: ", 
"Which meal is your favourite (eg: dinner, brunch, etc.): ", 
"What's your favourite thing to eat for that meal?: ", 
"Which sport is your absolute favourite?: ", 
"What is your superpower? In a few words, tell us what you are amazing at!: "];

let answers = ["My name is ", 
"An activity I like doing is ", 
"While I'm doing that I like to listen to ", 
"My favourite meal is ", 
"My favourite thing to eat for that meal is ",
"My absolute favourite sport is ", 
"And finally, my super power is "];

let prompt = 0;
let profile = '\nMy Profile: \n';

let ask = prompt => {
  if (prompt < questions.length - 1) {
    rl.question(questions[prompt], (answer) => {
      profile += answers[prompt] + answer + '. ';
      prompt++;
      ask(prompt);
    });
  } else {
    rl.question(questions[prompt], (answer) => {
      profile += answers[prompt] + answer + '. \n';
      console.log(profile);
      rl.close();
    });
  }
};

ask(prompt);