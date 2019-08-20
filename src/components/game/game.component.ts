import { Component, OnInit } from '@angular/core';
import { CodeMakerService } from '../../app/code-maker.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  circles: string[];

  constructor(service: CodeMakerService){
    this.circles = service.generateCode()
  }
  ngOnInit() {

  }

}
