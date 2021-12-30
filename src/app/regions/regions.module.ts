import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { regionsReducer } from './state';
import { RegionListComponent } from './region-list/region-list.component';



@NgModule({
  declarations: [
    RegionListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('regions', regionsReducer),
    EffectsModule.forFeature([]),
    SharedModule
  ],
  exports: [
    RegionListComponent
  ]
})
export class RegionsModule { }
