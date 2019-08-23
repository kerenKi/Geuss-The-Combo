import { Component, OnInit } from '@angular/core';
import { CodeMakerService } from '../../app/code-maker.service'
import { Color } from '../../app/models/Colors'
import { Guesses } from '../../app/models/Guesses'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  
  winningCode: Color[];
  currentColor: Color; 
  remainningGuesses: number[] = [10,9,8,7,6,5,4,3,2]
  attemptedGuesses: Guesses[] = []

  constructor(private service: CodeMakerService) { }
  
  getWinningCode() :void {
    this.winningCode = this.service.generateCode()
  }
  
  ngOnInit() :void {
    this.getWinningCode()
  }

  setColor(color:Color) :void {
    this.currentColor = color
  }

  startNewGame() :void {
    this.getWinningCode()
    this.remainningGuesses = [10,9,8,7,6,5,4,3,2]
    this.attemptedGuesses = []
  }

  calculateWinner(feedbackColors:Color[]) :boolean {
    const hitsArray:Color[] = feedbackColors.filter( color => color === Color.Hit)
    if(hitsArray.length === 4){
      Swal.fire({
        title:'Congratulatios! You guessed the combo!',
        html:
          ` <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
              <iframe src="https://giphy.com/embed/l0IygWpszunxnkMAo" width="80%" height="100%" style="position:absolute;right:40px;" frameBorder="0"></iframe>
            </div>
          `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:'Play again',
      })
      this.startNewGame()
      return true
    } 
    return false
  }

  setGuess(guesses:Guesses) :void {
    const win = this.calculateWinner(guesses.feedback)
    if(!win) {
      this.attemptedGuesses.push(guesses)
      this.remainningGuesses.shift()
    }
    if(this.attemptedGuesses.length === 10) {
      Swal.fire({
        title:'You\'re out of guesses!',
        html:
        `<div style="width:100%;height:0;padding-bottom:56%;position:relative;"> 
          <img src="../../assets/Crying_spongebob_patrick.gif" style="width:98%;position:absolute;right:1px;">
        </div> 
        `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:'Play again',
      })
      this.startNewGame()
    }
  }

}
