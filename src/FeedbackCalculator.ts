import { Color } from './app/models/Colors'
import { Dot } from './app/models/Dot'

export function calculateFeedback( winningCode:Color[], guessedCode:Color[]) {
  let feedbackColors: Color[] = []
  let compareWinning: Dot[] = winningCode.map( (dot: Color, index: number):Dot => {
    let newDot = {
      color: dot,
      index: index,
      hit: false,
      correctColor: false
    }
    return newDot
  }) 

  //check for hits: correct color and place
  guessedCode.map((color:Color, index:number) :void => {
    if( color === compareWinning[index].color) {
      feedbackColors =[... feedbackColors, Color.Hit]
      compareWinning[index].hit = true
    }
  })

  //check for correct color wrong place
  guessedCode.map((color:Color, index:number) :void => {
    if (color !== compareWinning[index].color) {
      const correctColorIndex:number = compareWinning.findIndex( dot => dot.color === color && dot.index !== index && !dot.hit &&!dot.correctColor)

      if( correctColorIndex !== -1) {
        feedbackColors =[... feedbackColors, Color.CorrectColor]
        compareWinning[correctColorIndex].correctColor = true
      }
    }
  })

  //complete the misses
  switch(feedbackColors.length){
    case 0:
        feedbackColors =[... feedbackColors, Color.Miss, Color.Miss, Color.Miss, Color.Miss]
      break;
    case 1:
        feedbackColors =[... feedbackColors, Color.Miss, Color.Miss, Color.Miss]
      break;
    case 2:
        feedbackColors =[... feedbackColors, Color.Miss, Color.Miss]
      break;
    case 3:
        feedbackColors =[... feedbackColors, Color.Miss]
      break; 
    default:
      feedbackColors = [... feedbackColors]             
  }
  return feedbackColors
}
