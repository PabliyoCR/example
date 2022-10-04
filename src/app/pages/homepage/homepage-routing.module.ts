import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { 
      seo: {
        title : 'Rethink RSV (Respiratory Syncytial Virus)',
        metaTags : [{ 
          name : 'description', 
          content : 'Severe RSV (Respiratory Syncytial Virus) is unpredictable. Any infant can be hospitalized in their first season. Understand the impact of severe RSV.'
        }]
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
