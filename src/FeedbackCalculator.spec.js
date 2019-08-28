"use strict";
exports.__esModule = true;
var FeedbackCalculator_1 = require("./FeedbackCalculator");
var Colors_1 = require("./app/models/Colors");
var winCode = [Colors_1.Color.Red, Colors_1.Color.Red, Colors_1.Color.Purple, Colors_1.Color.Green];
var guessCode = [Colors_1.Color.Purple, Colors_1.Color.Red, Colors_1.Color.Yellow, Colors_1.Color.Purple];
var expectedFeedback = [Colors_1.Color.Hit, Colors_1.Color.CorrectColor, Colors_1.Color.Miss, Colors_1.Color.Miss];
var feedback = FeedbackCalculator_1.calculateFeedback(winCode, guessCode);
function isEqual(feedbackArray, expectedFeedbackArray) {
    if (feedbackArray.length !== expectedFeedbackArray.length) {
        console.log('length is not equal');
        return false;
    }
    var valuesEqual = feedbackArray.filter(function (color, index) { return color === expectedFeedbackArray[index]; });
    if (valuesEqual.length === 4) {
        console.log('arrays are equal');
        return true;
    }
    return false;
}
console.log('expected:', expectedFeedback);
console.log('recieved:', feedback);
test(' feedback and expected feedback Arrays should be equal', function () {
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
