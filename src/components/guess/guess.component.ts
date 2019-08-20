import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../app/models/Colors'

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  @Input() currentColor:Color
  circles:Color[] = [Color.Gray, Color.Gray, Color.Gray, Color.Gray]

  ngOnInit() {
    this.currentColor = Color.Gray
  }
  changeColor(index){
    this.circles[index] = this.currentColor
  }
}
