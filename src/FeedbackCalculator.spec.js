"use strict";
exports.__esModule = true;
var FeedbackCalculator_1 = require("./FeedbackCalculator");
var Colors_1 = require("./app/models/Colors");
// all options: hit, miss, correct color
test(' all options: hit, miss, correct color. feedback array should be [ "limegreen", "darkorange", "seashell", "seashell" ]', function () {
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
// all hit
test(' all hits. feedback array should be [ "limegreen", "limegreen", "limegreen", "limegreen" ]', function () {
    var winCode = [Colors_1.Color.Green, Colors_1.Color.Blue, Colors_1.Color.Blue, Colors_1.Color.Purple];
    var guessCode = [Colors_1.Color.Green, Colors_1.Color.Blue, Colors_1.Color.Blue, Colors_1.Color.Purple];
    var expectedFeedback = [Colors_1.Color.Hit, Colors_1.Color.Hit, Colors_1.Color.Hit, Colors_1.Color.Hit];
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
// all miss
test(' all miss. feedback array should be [ "seashell", "seashell", "seashell", "seashell" ]', function () {
    var winCode = [Colors_1.Color.Red, Colors_1.Color.Red, Colors_1.Color.Purple, Colors_1.Color.Red];
    var guessCode = [Colors_1.Color.Green, Colors_1.Color.Orange, Colors_1.Color.Yellow, Colors_1.Color.Orange];
    var expectedFeedback = [Colors_1.Color.Miss, Colors_1.Color.Miss, Colors_1.Color.Miss, Colors_1.Color.Miss];
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
// all correct color
test('all correct color. feedback array should be [ "darkorange", "darkorange", "darkorange", "darkorange" ]', function () {
    var winCode = [Colors_1.Color.Green, Colors_1.Color.Red, Colors_1.Color.Purple, Colors_1.Color.Green];
    var guessCode = [Colors_1.Color.Red, Colors_1.Color.Green, Colors_1.Color.Green, Colors_1.Color.Purple];
    var expectedFeedback = [Colors_1.Color.CorrectColor, Colors_1.Color.CorrectColor, Colors_1.Color.CorrectColor, Colors_1.Color.CorrectColor];
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
// hit and miss
test('hit and miss. feedback array should be [ "limegreen", "limegreen", "seashell", "seashell" ]', function () {
    var winCode = [Colors_1.Color.Red, Colors_1.Color.Yellow, Colors_1.Color.Orange, Colors_1.Color.Green];
    var guessCode = [Colors_1.Color.Purple, Colors_1.Color.Yellow, Colors_1.Color.Purple, Colors_1.Color.Green];
    var expectedFeedback = [Colors_1.Color.Hit, Colors_1.Color.Hit, Colors_1.Color.Miss, Colors_1.Color.Miss];
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
// correct color and miss
test('correct color and miss. feedback array should be [ "darkorange", "darkorange", "seashell", "seashell" ]', function () {
    var winCode = [Colors_1.Color.Orange, Colors_1.Color.Purple, Colors_1.Color.Purple, Colors_1.Color.Green];
    var guessCode = [Colors_1.Color.Green, Colors_1.Color.Red, Colors_1.Color.Yellow, Colors_1.Color.Purple];
    var expectedFeedback = [Colors_1.Color.CorrectColor, Colors_1.Color.CorrectColor, Colors_1.Color.Miss, Colors_1.Color.Miss];
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
// correct color and hit
test('correct color and hit. feedback array should be [ "limegreen", "limegreen", "darkorange", "darkorange" ]', function () {
    var winCode = [Colors_1.Color.Yellow, Colors_1.Color.Orange, Colors_1.Color.Blue, Colors_1.Color.Green];
    var guessCode = [Colors_1.Color.Green, Colors_1.Color.Orange, Colors_1.Color.Blue, Colors_1.Color.Yellow];
    var expectedFeedback = [Colors_1.Color.Hit, Colors_1.Color.Hit, Colors_1.Color.CorrectColor, Colors_1.Color.CorrectColor];
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
    expect(isEqual(feedback, expectedFeedback)).toBe(true);
});
