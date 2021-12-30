import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { AppRoutingModule } from './app-routing.module';
import { GeographicNavigatorComponent } from './geographic-navigator/geographic-navigator.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountriesModule } from './countries/countries.module';
import { RegionsModule } from './regions/regions.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    GeographicNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountriesModule,
    RegionsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
