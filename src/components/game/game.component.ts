import { Component, OnInit } from '@angular/core';
import { CodeMakerService } from '../../app/code-maker.service'
import { Color } from '../../app/models/Colors'
import { Guesses } from '../../app/models/Guesses'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  constructor(private service: CodeMakerService) { }

  winningCode: Color[];
  currentColor: Color; 
  remainningGuesses: number[] = [10,9,8,7,6,5,4,3,2]
  attemptedGuesses: Guesses[] = []

  
  getWinningCode(): void {
    this.winningCode = this.service.generateCode()
  }
  
  ngOnInit() {
    this.getWinningCode()
  }

  setColor(color:Color){
    this.currentColor = color
  }

  startNewGame(){
    this.getWinningCode()
    this.remainningGuesses = [10,9,8,7,6,5,4,3,2]
    this.attemptedGuesses = []
  }

  calculateWinner(feedbackColors) {
    const hitsArray:Color[] = feedbackColors.filter( color => color === Color.Hit)
    if(hitsArray.length === 4){
      alert('You win!')
      this.startNewGame()
      return true
    } 
    return false
  }

  setGuess(guesses:Guesses){
    const win = this.calculateWinner(guesses.feedback)
    if(!win){
      this.attemptedGuesses.push(guesses)
      this.remainningGuesses.shift()
    }
    if(this.attemptedGuesses.length === 10) {
      alert('You lose!')
      this.startNewGame()
    }
  }

}
