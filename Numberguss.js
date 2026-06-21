// Number guessing game

let minNum = 50;
let maxNum = 100;
// if minNum is not 1 then add minNum at minNum
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// console.log(answer);

let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));

    console.log(typeof guess, guess);
    if (isNaN(guess)) window.alert("Please enter a valid number");
    else if (guess < minNum || guess > maxNum) window.alert("please enter a valid number");
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low! Try again!");
        }
        else if (guess > answer) window.alert("too high! try again!");
        else {
            window.alert(`Correct! the answer was ${answer}. it took you ${attempts} attempts`);
            running = false;
        }
    }
}