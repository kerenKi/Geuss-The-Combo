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
    {
      color:'red',
    },
    {
      color:'yellow',
    },  
    {
      color:'green',
    },  
    {
      color:'blue',
    },  
    {
      color:'orange',
    },  
    {
      color:'purple',
    }
  ]
  selectedColor:Color = {color:''}

  pickColor(color:string){
    const colorIndex = this.colorOptions.findIndex( colorOption => colorOption.color === color)
    this.selectedColor = {color: this.colorOptions[colorIndex].color}
    this.sendColor.emit(this.selectedColor)
  }

}
