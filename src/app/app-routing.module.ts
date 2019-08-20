import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from '../components/game/game.component';
import { AboutComponent } from '../components/layout/about/about.component';
import { InstructionsComponent } from '../components/layout/instructions/instructions.component';


const routes: Routes = [
  { path:'', component: GameComponent},
  { path:'instructions', component: InstructionsComponent},
  { path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
