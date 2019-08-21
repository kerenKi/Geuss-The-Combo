import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../app/models/Colors'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Input() feedbackColors: Color[]
  dots:string[]= ['gray','gray','gray','gray'];
  title:string = 'test'
  
  ngOnInit() {
  }

}
