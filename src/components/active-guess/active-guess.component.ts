import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Color } from '../../app/models/Colors'
import { Guesses } from '../../app/models/Guesses'
import { CodeMakerService } from '../../app/code-maker.service'
import { calculateFeedback } from '../../FeedbackCalculator'
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

  ngOnInit():void {
    this.currentColor = Color.Gray
    
  }

  changeColor(index:number) {
    this.circles[index] = this.currentColor
  }

  validateGuess():boolean {
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
      return false
    }

  }  

  onSubmit():void {
    if(this.validateGuess()) {
      const feedback = calculateFeedback(this.winningCode, this.circles)
      this.feedbackColors = feedback
      this.sendGuess.emit({
        colors: this.circles, 
        feedback: this.feedbackColors
      })
      this.circles = [Color.Gray, Color.Gray, Color.Gray, Color.Gray]
      this.feedbackColors = []
    } 
  }
}
