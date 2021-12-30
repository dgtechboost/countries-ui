import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '../shared/shared.module';
import { countriesReducer } from './state';
import { CountriesEffects } from './state/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('countries', countriesReducer),
    EffectsModule.forFeature([CountriesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    SharedModule
  ]
})
export class CountriesModule { }
