import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { regionsReducer } from './state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('regions', regionsReducer),
    EffectsModule.forFeature([]),
    SharedModule
  ]
})
export class RegionsModule { }
