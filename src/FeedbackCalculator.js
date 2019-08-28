"use strict";
exports.__esModule = true;
var Colors_1 = require("./app/models/Colors");
function calculateFeedback(winningCode, guessedCode) {
    var feedbackColors = [];
    var compareWinning = winningCode.map(function (dot, index) {
        var newDot = {
            color: dot,
            index: index,
            hit: false,
            correctColor: false
        };
        return newDot;
    });
    //check for hits: correct color and place
    guessedCode.map(function (color, index) {
        if (color === compareWinning[index].color) {
            feedbackColors = feedbackColors.concat([Colors_1.Color.Hit]);
            compareWinning[index].hit = true;
        }
    });
    //check for correct color wrong place
    guessedCode.map(function (color, index) {
        if (color !== compareWinning[index].color) {
            var correctColorIndex = compareWinning.findIndex(function (dot) { return dot.color === color && dot.index !== index && !dot.hit && !dot.correctColor; });
            if (correctColorIndex !== -1) {
                feedbackColors = feedbackColors.concat([Colors_1.Color.CorrectColor]);
                compareWinning[correctColorIndex].correctColor = true;
            }
        }
    });
    //complete the misses
    switch (feedbackColors.length) {
        case 0:
            feedbackColors = feedbackColors.concat([Colors_1.Color.Miss, Colors_1.Color.Miss, Colors_1.Color.Miss, Colors_1.Color.Miss]);
            break;
        case 1:
            feedbackColors = feedbackColors.concat([Colors_1.Color.Miss, Colors_1.Color.Miss, Colors_1.Color.Miss]);
            break;
        case 2:
            feedbackColors = feedbackColors.concat([Colors_1.Color.Miss, Colors_1.Color.Miss]);
            break;
        case 3:
            feedbackColors = feedbackColors.concat([Colors_1.Color.Miss]);
            break;
        default:
            feedbackColors = feedbackColors.slice();
    }
    return feedbackColors;
}
exports.calculateFeedback = calculateFeedback;
