let randomnumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== randomnumber) {
  guess = parseInt(prompt("Guess a number between 1 and 100:"));

  if (isNaN(guess)) {
    alert("That's not a valid number. Please try again.");
  } else if (guess < randomnumber) {
    alert("Too low! Try again.");
  } else if (guess > randomnumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the correct number: " + randomnumber);
  }
}
