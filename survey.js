const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profileParagraph = "";

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  profileParagraph += `Hey my name is ${name},`;

  rl.question("What's an activity you like doing? ", (activity) => {
    profileParagraph += ` I love to ${activity}`;

    rl.question("What music do you listen to while doing that? ", (music) => {
      profileParagraph += ` and listen to ${music} while doing that!`;

      rl.question("Which meal is your favourite? ", (meal) => {
        profileParagraph += ` My favorite meal is ${meal}`;

        rl.question("What's your favourite thing to eat for that meal? ", (fooditem) => {
          profileParagraph += ` and I love to eat ${fooditem}.`;

          rl.question("Which sport is your absolute favourite? ", (sport) => {
            profileParagraph += ` I can play ${sport} for hours and hours`;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              profileParagraph += ` and my superpower is ${superpower}!`;
              console.log(profileParagraph);
              rl.close();
            });
          });
        });
      });
    });
  });

});