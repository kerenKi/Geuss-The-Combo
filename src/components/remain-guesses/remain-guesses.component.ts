import { Component } from '@angular/core';
import { Color } from '../../app/models/Colors'

@Component({
  selector: 'app-remain-guesses',
  templateUrl: './remain-guesses.component.html',
  styleUrls: ['./remain-guesses.component.css']
})
export class RemainGuessesComponent {
  circles:Color[] = [Color.Gray, Color.Gray, Color.Gray, Color.Gray]

}
