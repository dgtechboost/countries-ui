import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeographicNavigatorComponent } from './geographic-navigator/geographic-navigator.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'geographic-navigator', component: GeographicNavigatorComponent },
      {
        path: 'countries',
        loadChildren: () =>
          import('./countries/countries.module').then(m => m.CountriesModule)
      },
      {
        path: '',
        redirectTo: 'geographic-navigator',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
