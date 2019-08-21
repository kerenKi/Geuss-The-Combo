import { Component, OnInit } from '@angular/core';
import { CodeMakerService } from '../../app/code-maker.service'
import { Color } from '../../app/models/Colors'


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
  attemptedGuesses = []

  
  getWinningCode(): void {
    this.winningCode = this.service.generateCode()
  }
  
  ngOnInit() {
    this.getWinningCode()
  }
  setColor(color:Color){
    this.currentColor = color
  }
}
