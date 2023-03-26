import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pixabay/pages/search/search.component';
import { AvengersComponent } from './pixabay/pages/avengers/avengers.component';
import { CaptainAmericaComponent } from './pixabay/pages/captain-america/captain-america.component';
import { IronManComponent } from './pixabay/pages/iron-man/iron-man.component';
import { SpidermanComponent } from './pixabay/pages/spiderman/spiderman.component';
import { ThorComponent } from './pixabay/pages/thor/thor.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'avengers',
    component: AvengersComponent
  },
  {
    path: 'captain-america',
    component: CaptainAmericaComponent
  },
  {
    path: 'iron-man',
    component: IronManComponent
  },
  {
    path: 'spiderman',
    component: SpidermanComponent
  },
  {
    path: 'thor',
    component: ThorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
