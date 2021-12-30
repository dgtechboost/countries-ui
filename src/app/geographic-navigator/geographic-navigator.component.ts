import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCoutryList, getFilteredCountryList, selectCountries, getSelectedCountry, setSelectedCountryName, selectFilteredCountries, selectSelectedCountryName, clearCountrySelection } from '../countries/state';
import { CountryModel } from '../models/country-model';
import { RegionModel } from '../models/region-model';
import { getSelectedRegion, selectedRegion } from '../regions/state';
import { regions as regionsHardCoded } from '../shared/constants/regions';

@Component({
  selector: 'app-geographic-navigator',
  templateUrl: './geographic-navigator.component.html',
  styleUrls: ['./geographic-navigator.component.scss']
})
export class GeographicNavigatorComponent implements OnInit {

  regions: RegionModel[];
  countries$: Observable<CountryModel[]>;
  selectedRegion$: Observable<string>;
  filteredCountries$: Observable<CountryModel[]>;
  selectedCountryName$: Observable<string>;

  constructor(
    private _store: Store) { }

  ngOnInit(): void {
    this.processRegions();
    this.loadCountries();
  }

  processRegions() {
    this.regions = regionsHardCoded.map(data => {
      return { name: data } as RegionModel
    })
  }

  loadCountries() {
    this._store.dispatch(getCoutryList())
    this.countries$ = this._store.pipe(select(selectCountries));
  }

  selectedRegionFunc(name: string) {
    this._store.dispatch(clearCountrySelection());
    this._store.dispatch(selectedRegion({ region: name }))
    this._store.dispatch(getFilteredCountryList({ region: name }));
    this.selectedRegion$ = this._store.pipe(select(getSelectedRegion));
    this.filteredCountries$ = this._store.pipe(select(selectFilteredCountries));
  }

  selectedCountryFunc(name: string) {
    this._store.dispatch(setSelectedCountryName({ name: name }))
    this.selectedCountryName$ = this._store.pipe(select(selectSelectedCountryName));
    this._store.dispatch(getSelectedCountry());
  }
}