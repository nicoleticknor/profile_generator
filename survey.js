///HA we got Rickroll'd

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//should probably do this with an object 
let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.name = `My name is ${answer}.`;

  rl.question("What's an activity you like doing? ", (answer) => {
    profile.activity = `I really like ${answer}`;

    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = `while listening to ${answer}.`;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc) ", (answer) => {
        profile.meal = `My favourite meal is ${answer}.`;

        rl.question("Which sport is your absolute favourite? ", (answer) => {
          profile.sport = `My favourite sport is ${answer}.`;

          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            profile.superpower = `My superpower is ${answer}.`;
            console.log(Object.values(profile).join(' '));
            rl.close();
          });
        });
      });
    });
  });
});









// console.log(profile.join(' '));