import { calculateFeedback } from './FeedbackCalculator'
import { Color } from './app/models/Colors'

// all options: hit, miss, correct color
test(' all options: hit, miss, correct color. feedback array should be [ "limegreen", "darkorange", "seashell", "seashell" ]', ()=> {
  const winCode:Color[] = [Color.Red, Color.Red, Color.Purple, Color.Green]
  const guessCode:Color[] = [Color.Purple, Color.Red, Color.Yellow, Color.Purple]
  const expectedFeedback:Color[] = [Color.Hit, Color.CorrectColor, Color.Miss, Color.Miss]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})

// all hit
test(' all hits. feedback array should be [ "limegreen", "limegreen", "limegreen", "limegreen" ]', ()=> {
  const winCode:Color[] = [Color.Green, Color.Blue, Color.Blue, Color.Purple]
  const guessCode:Color[] = [Color.Green, Color.Blue, Color.Blue, Color.Purple]
  const expectedFeedback:Color[] = [Color.Hit,Color.Hit,Color.Hit,Color.Hit]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})

// all miss
test(' all miss. feedback array should be [ "seashell", "seashell", "seashell", "seashell" ]', ()=> {
  const winCode:Color[] = [Color.Red, Color.Red, Color.Purple, Color.Red]
  const guessCode:Color[] = [Color.Green, Color.Orange, Color.Yellow, Color.Orange]
  const expectedFeedback:Color[] = [Color.Miss, Color.Miss, Color.Miss, Color.Miss]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})

// all correct color
test('all correct color. feedback array should be [ "darkorange", "darkorange", "darkorange", "darkorange" ]', ()=> {
  const winCode:Color[] = [Color.Green, Color.Red, Color.Purple, Color.Green]
  const guessCode:Color[] = [Color.Red, Color.Green, Color.Green, Color.Purple]
  const expectedFeedback:Color[] = [Color.CorrectColor, Color.CorrectColor, Color.CorrectColor, Color.CorrectColor]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})

// hit and miss
test('hit and miss. feedback array should be [ "limegreen", "limegreen", "seashell", "seashell" ]', ()=> {
  const winCode:Color[] = [Color.Red, Color.Yellow, Color.Orange, Color.Green]
  const guessCode:Color[] = [Color.Purple, Color.Yellow, Color.Purple, Color.Green]
  const expectedFeedback:Color[] = [Color.Hit, Color.Hit, Color.Miss, Color.Miss]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})

// correct color and miss
test('correct color and miss. feedback array should be [ "darkorange", "darkorange", "seashell", "seashell" ]', ()=> {
  const winCode:Color[] = [Color.Orange, Color.Purple, Color.Purple, Color.Green]
  const guessCode:Color[] = [Color.Green, Color.Red, Color.Yellow, Color.Purple]
  const expectedFeedback:Color[] = [Color.CorrectColor, Color.CorrectColor, Color.Miss, Color.Miss]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})

// correct color and hit
test('correct color and hit. feedback array should be [ "limegreen", "limegreen", "darkorange", "darkorange" ]', ()=> {
  const winCode:Color[] = [Color.Yellow, Color.Orange, Color.Blue, Color.Green]
  const guessCode:Color[] = [Color.Green, Color.Orange, Color.Blue, Color.Yellow]
  const expectedFeedback:Color[] = [Color.Hit, Color.Hit, Color.CorrectColor, Color.CorrectColor]
  
  const feedback:Color[] = calculateFeedback(winCode, guessCode)
  function isEqual(feedbackArray:Color[],expectedFeedbackArray:Color[]) :boolean {
    if(feedbackArray.length !== expectedFeedbackArray.length){
      console.log('length is not equal')
      return false
    }
  
  const valuesEqual:Color[] = feedbackArray.filter((color, index) => color === expectedFeedbackArray[index])
  if (valuesEqual.length === 4) {
    console.log('arrays are equal')
    return true
    }
  
    return false
  } 
  console.log('expected:', expectedFeedback)
  console.log('recieved:', feedback)
  expect(isEqual(feedback, expectedFeedback)).toBe(true)
})




