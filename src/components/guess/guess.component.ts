import { Component, OnInit, Input,  } from '@angular/core';
import { Color } from '../../app/models/Colors'
import { CodeMakerService } from '../../app/code-maker.service'

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Input() currentColor: Color
  @Input() winningCode: Color[]

  circles:Color[] = [Color.Gray, Color.Gray, Color.Gray, Color.Gray]
  feedbackColors: Color[] = []

  constructor(private service: CodeMakerService) { }

  ngOnInit() {
    this.currentColor = Color.Gray
  }
  changeColor(index){
    this.circles[index] = this.currentColor
  }
  calculateWinner(){
   const hitsArray:Color[] = this.feedbackColors.filter( color => color === Color.Hit)
   if (hitsArray.length === 4){
     alert('You won!')
   }
  }
  onSubmit(){
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
    
    if(this.feedbackColors === []) {

    }
    this.calculateWinner()
    return this.feedbackColors
    
  }
}
