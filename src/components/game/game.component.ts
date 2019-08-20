import { Component, OnInit } from '@angular/core';
import { ColoredCircleComponent } from '../colored-circle/colored-circle.component'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  circles: string[] = ['red','green', 'blue','yellow']

  ngOnInit() {
  }

}
