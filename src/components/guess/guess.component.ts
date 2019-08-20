import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../app/models/Colors'

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Input() currentColor:Color
  circles:string[] = ['gray','gray','gray','gray']

  ngOnInit() {
    this.currentColor = { color: 'gray' }
  }
  changeColor(index){
    this.circles[index] = this.currentColor.color
  }
}
