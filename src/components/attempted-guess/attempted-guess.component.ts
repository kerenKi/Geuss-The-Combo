import { Component, Input } from '@angular/core';
import { Color } from '../../app/models/Colors'


@Component({
  selector: 'app-attempted-guess',
  templateUrl: './attempted-guess.component.html',
  styleUrls: ['./attempted-guess.component.css']
})
export class AttemptedGuessComponent {
 @Input() circles:Color[] 
 @Input() feedbackColors: Color[] 
}
