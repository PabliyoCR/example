import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacerGameComponent } from './racer-game.component';

const routes: Routes = [{ path: '', component: RacerGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacerGameRoutingModule { }
