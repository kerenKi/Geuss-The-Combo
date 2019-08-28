import { calculateFeedback } from './FeedbackCalculator'
import { Color } from './app/models/Colors'

const winCode = [Color.Red, Color.Red, Color.Purple, Color.Green]
const guessCode = [Color.Purple, Color.Red, Color.Yellow, Color.Purple]
const expectedFeedback = [Color.Hit, Color.CorrectColor, Color.Miss, Color.Miss]

const feedback = calculateFeedback(winCode, guessCode)
function isEqual(feedbackArray,expectedFeedbackArray)  {
  if(feedbackArray.length !== expectedFeedbackArray.length){
    console.log('length is not equal')
    return false
  }

const valuesEqual = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
if (valuesEqual.length === 4) {
  console.log('arrays are equal')
  return true
  }

  return false
} 

console.log('expected:', expectedFeedback)
console.log('recieved:', feedback)

test(' feedback and expected feedback Arrays should be equal', ()=> {
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})


