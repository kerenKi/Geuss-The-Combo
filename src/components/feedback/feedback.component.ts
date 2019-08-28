import { Component, Input } from '@angular/core';
import { Color } from '../../app/models/Colors'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  @Input() feedbackColors: Color[]
  dots:string[]= ['gray','gray','gray','gray'];
}
