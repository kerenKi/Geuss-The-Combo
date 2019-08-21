import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from '../components/game/game.component';
import { AboutComponent } from '../components/layout/about/about.component';
import { InstructionsComponent } from '../components/layout/instructions/instructions.component';
import { HeaderComponent } from '../components/layout/header/header.component';
import { GuessComponent } from '../components/guess/guess.component';
import { FeedbackComponent } from '../components/feedback/feedback.component';
import { ColorOptionsComponent } from '../components/color-options/color-options.component';
import { AttemptedGuessComponent } from '../components/attempted-guess/attempted-guess.component';
import { ActiveGuessComponent } from '../components/active-guess/active-guess.component';
import { RemainGuessesComponent } from '../components/remain-guesses/remain-guesses.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AboutComponent,
    InstructionsComponent,
    HeaderComponent,
    GuessComponent,
    FeedbackComponent,
    ColorOptionsComponent,
    AttemptedGuessComponent,
    ActiveGuessComponent,
    RemainGuessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
