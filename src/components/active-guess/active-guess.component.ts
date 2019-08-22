import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Color } from '../../app/models/Colors'
import { Guesses } from '../../app/models/Guesses'
import { CodeMakerService } from '../../app/code-maker.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-active-guess',
  templateUrl: './active-guess.component.html',
  styleUrls: ['./active-guess.component.css']
})
export class ActiveGuessComponent implements OnInit {
  @Input() currentColor: Color
  @Input() winningCode: Color[]
  @Output() sendGuess: EventEmitter<Guesses> = new EventEmitter()

  circles:Color[] = [Color.Gray, Color.Gray, Color.Gray, Color.Gray]
  feedbackColors: Color[] = []

  constructor(private service: CodeMakerService) { }

  ngOnInit() {
    this.currentColor = Color.Gray
    
  }

  changeColor(index) {
    this.circles[index] = this.currentColor
  }

  validateGuess(){
    const filteredCircles:Color[] = this.circles.filter( circle => circle !== Color.Gray)
    if (filteredCircles.length === 4){
      return true
    } else {
      Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'Oops...',
        text: 'You need to fill in all 4 spots',
        animation: false,
        customClass: {
          popup: 'animated bounceInDown'
        }
      })
    }

  }

  calculateFeedback() {
    const codeToCheck: Color[] = this.circles
    let compareWinning = this.winningCode.map( (dot: Color, index: number) => {
      let newDot = {
        color: dot,
        index: index,
        hit: false,
        correctColor: false
      }
      return newDot
    }) 
    //check for hits: correct color and place
    codeToCheck.map((color:Color, index:number) => {
      if( color === compareWinning[index].color) {
        this.feedbackColors =[... this.feedbackColors, Color.Hit]
        compareWinning[index].hit = true
      }
    })

    //check for correct color wrong place
    codeToCheck.map((color:Color, index:number) => {
      if (color !== compareWinning[index].color) {
        const correctColorIndex = compareWinning.findIndex( dot => dot.color === color && dot.index !== index && !dot.hit &&!dot.correctColor)

        if( correctColorIndex !== -1) {
          this.feedbackColors =[... this.feedbackColors, Color.CorrectColor]
          compareWinning[correctColorIndex].correctColor = true
        }
      }
    })

    //complete the misses
    switch(this.feedbackColors.length){
      case 0:
          this.feedbackColors =[... this.feedbackColors, Color.Miss, Color.Miss, Color.Miss, Color.Miss]
        break;
      case 1:
          this.feedbackColors =[... this.feedbackColors, Color.Miss, Color.Miss, Color.Miss]
        break;
      case 2:
          this.feedbackColors =[... this.feedbackColors, Color.Miss, Color.Miss]
        break;
      case 3:
          this.feedbackColors =[... this.feedbackColors, Color.Miss]
        break; 
      default:
        this.feedbackColors = [... this.feedbackColors]             
    }
    return this.feedbackColors
  }

  

  onSubmit(){
    if(this.validateGuess()){
      this.calculateFeedback()
      this.sendGuess.emit({
        colors: this.circles, 
        feedback: this.feedbackColors
      })
      this.circles = [Color.Gray, Color.Gray, Color.Gray, Color.Gray]
      this.feedbackColors = []
    } 
    
  }

  

}
