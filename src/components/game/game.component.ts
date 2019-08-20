import { Component, OnInit } from '@angular/core';
import { CodeMakerService } from '../../app/code-maker.service'
import { Color } from '../../app/models/Colors'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  circles: string[];
  currentColor: Color; 

  constructor(service: CodeMakerService){
    this.circles = service.generateCode()
  }
  ngOnInit() {

  }
  setColor(color:Color){
    this.currentColor = color
  }
}
