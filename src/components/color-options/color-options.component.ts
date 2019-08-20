import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.css']
})
export class ColorOptionsComponent implements OnInit {

  circles: string[] = ['red','yellow','green','blue','orange','purple']

  ngOnInit() {
  }

}
