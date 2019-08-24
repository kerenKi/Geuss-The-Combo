import { calculateFeedback } from './FeedbackCalculator'
import { Color } from './app/models/Colors'

const winCode = [Color.Red, Color.Red, Color.Purple, Color.Green]
const guessCode = [Color.Purple, Color.Red, Color.Yellow, Color.Purple]
const expectedFeedback = [Color.Hit, Color.CorrectColor, Color.Miss, Color.Miss]

const feedback = calculateFeedback(winCode, guessCode)

console.log('expected:', expectedFeedback)
console.log('recieved:', feedback)

if (feedback !== expectedFeedback){
  console.log('Bad Feedback!')
} else {
  console.log('Good job!')
}