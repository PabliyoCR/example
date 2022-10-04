import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertInsightsComponent } from './expert-insights.component';

const routes: Routes = [{ path: '', component: ExpertInsightsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertInsightsRoutingModule { }
