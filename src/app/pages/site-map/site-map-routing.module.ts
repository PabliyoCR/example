import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteMapComponent } from './site-map.component';

const routes: Routes = [{ path: '', component: SiteMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteMapRoutingModule { }
