"use strict";
exports.__esModule = true;
var FeedbackCalculator_1 = require("./FeedbackCalculator");
var Colors_1 = require("./app/models/Colors");
var winCode = [Colors_1.Color.Red, Colors_1.Color.Red, Colors_1.Color.Purple, Colors_1.Color.Green];
var guessCode = [Colors_1.Color.Purple, Colors_1.Color.Red, Colors_1.Color.Yellow, Colors_1.Color.Purple];
var expectedFeedback = [Colors_1.Color.Hit, Colors_1.Color.CorrectColor, Colors_1.Color.Miss, Colors_1.Color.Miss];
var feedback = FeedbackCalculator_1.calculateFeedback(winCode, guessCode);
console.log('expected:', expectedFeedback);
console.log('recieved:', feedback);
if (feedback !== expectedFeedback) {
    console.log('Bad Feedback!');
}
else {
    console.log('Good job!');
}
