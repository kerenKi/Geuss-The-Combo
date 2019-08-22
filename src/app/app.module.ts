import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from '../components/game/game.component';
import { AboutComponent } from '../components/layout/about/about.component';
import { InstructionsComponent } from '../components/layout/instructions/instructions.component';
import { HeaderComponent } from '../components/layout/header/header.component';
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
    FeedbackComponent,
    ColorOptionsComponent,
    AttemptedGuessComponent,
    ActiveGuessComponent,
    RemainGuessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot({
        buttonsStyling: false,
        customClass: 'modal-content',
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
