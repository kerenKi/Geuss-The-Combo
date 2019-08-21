import { Component, EventEmitter, Output } from '@angular/core';
import { Color } from '../../app/models/Colors'

@Component({
  selector: 'app-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.css']
})
export class ColorOptionsComponent {
  @Output() sendColor: EventEmitter<Color> = new EventEmitter()
  colorOptions: Color[] = [
    Color.Red, 
    Color.Blue,
    Color.Green,
    Color.Purple,
    Color.Yellow,
    Color.Orange  
  ]
  
  selectedColor:Color;

  pickColor(color:Color) {
    const colorIndex = this.colorOptions.findIndex( colorOption => colorOption === color)
    this.selectedColor = this.colorOptions[colorIndex]
    this.sendColor.emit(this.selectedColor)
  }

}
