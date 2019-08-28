import { Injectable } from '@angular/core';
import { Color } from './models/Colors'

@Injectable({
  providedIn: 'root'
})
export class CodeMakerService {
  randomNumber() :number {
    return Math.floor(Math.random() * 6)
  }
  generateCode() :Color[] {
    const colors: Color[] = [Color.Red, Color.Yellow, Color.Green, Color.Blue, Color.Orange, Color.Purple] 
    const winningCode = [colors[this.randomNumber()],colors[this.randomNumber()],colors[this.randomNumber()],colors[this.randomNumber()]] 
    return winningCode
  }

  calculateFeedback(winningCode:Color[], guessCode:Color[]) :void{
    console.log(winningCode)
    console.log(guessCode)
  }
}
