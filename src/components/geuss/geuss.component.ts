import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geuss',
  templateUrl: './geuss.component.html',
  styleUrls: ['./geuss.component.css']
})
export class GeussComponent implements OnInit {

  circles:string[] = ['gray','gray','gray','gray']

  ngOnInit() {
  }

}
