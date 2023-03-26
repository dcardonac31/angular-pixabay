import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IronManComponent } from './pages/iron-man/iron-man.component';
import { SpidermanComponent } from './pages/spiderman/spiderman.component';
import { ThorComponent } from './pages/thor/thor.component';
import { CaptainAmericaComponent } from './pages/captain-america/captain-america.component';
import { AvengersComponent } from './pages/avengers/avengers.component';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AvengersComponent,
    CaptainAmericaComponent,
    IronManComponent,
    SearchComponent,
    SpidermanComponent,
    ThorComponent
  ],
  exports: [
    AvengersComponent,
    CaptainAmericaComponent,
    IronManComponent,
    SearchComponent,
    SpidermanComponent,
    ThorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PixabayModule { }
