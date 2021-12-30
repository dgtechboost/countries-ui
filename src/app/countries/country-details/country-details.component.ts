import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryModel } from 'src/app/models/country-model';
import { selectSelectedCountry } from '../state';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {

  country$: Observable<CountryModel>;

  constructor(
    private _store: Store,
  ) {
    this.country$ = this._store.pipe(select(selectSelectedCountry))
  }
}
