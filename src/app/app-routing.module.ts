import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'about-rsv',
    loadChildren: () =>
      import('./pages/about-rsv/about-rsv.module').then(
        (m) => m.AboutRsvModule
      ),
  },
  {
    path: 'expert-insights',
    loadChildren: () =>
      import('./pages/expert-insights/expert-insights.module').then(
        (m) => m.ExpertInsightsModule
      ),
  },
  {
    path: 'racer-game',
    loadChildren: () =>
      import('./pages/racer-game/racer-game.module').then(
        (m) => m.RacerGameModule
      ),
  },
  {
    path: 'site-map',
    loadChildren: () =>
      import('./pages/site-map/site-map.module').then(
        (m) => m.SiteMapModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
