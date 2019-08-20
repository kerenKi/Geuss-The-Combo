import { Component, OnInit } from '@angular/core';
import { ColorOption } from '../../app/models/Colors'

@Component({
  selector: 'app-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.css']
})
export class ColorOptionsComponent implements OnInit {

  colorOptions: ColorOption[] = [
    {
      color:'red',
      isSelected: false
    },
    {
      color:'yellow',
      isSelected: false
    },  {
      color:'green',
      isSelected: false
    },  {
      color:'blue',
      isSelected: false
    },  {
      color:'orange',
      isSelected: false
    },  {
      color:'purple',
      isSelected: false
    }
  ]

  selectedColor:string = ''

  pickColor(color){
    const colorIndex = this.colorOptions.findIndex( colorOption => colorOption.color === color)
    this.colorOptions[colorIndex].isSelected = true
  }

}
