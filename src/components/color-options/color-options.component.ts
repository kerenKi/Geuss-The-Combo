import { Component, OnInit } from '@angular/core';
import { ColorOption } from '../../app/models/Colors'

@Component({
  selector: 'app-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.css']
})
export class ColorOptionsComponent implements OnInit {

  circles: ColorOption[] = [
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
      isSelected: true
    },  {
      color:'orange',
      isSelected: false
    },  {
      color:'purple',
      isSelected: false
    }
  ]

  ngOnInit() {
  }

}
