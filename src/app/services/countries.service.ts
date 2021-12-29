import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryModel } from '../models/country-model';
import { SharedUtilitiesService } from '../shared/utilities/shared-utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countriesUrl = 'https://restcountries.com/v3.1/region';

  constructor(
    private _httpClient: HttpClient, 
    private _sharedService: SharedUtilitiesService) { }

  getEuropeCountries(): Observable<CountryModel[]> {
    return this._httpClient.get<CountryModel[]>(this.countriesUrl);
  }

  getAsianCountries() {
    return this._httpClient.get<CountryModel[]>(this.countriesUrl);
  }

  getAllCountriesDetailed(): Observable<Array<CountryModel>> {
    debugger
    let asianCountries = this._httpClient.get<CountryModel[]>(`${this.countriesUrl}/asia`)
    let europeCountries = this._httpClient.get<CountryModel[]>(`${this.countriesUrl}/europe`)

    return combineLatest([asianCountries, europeCountries])
      .pipe(
        map(([asian, europe]) => {
          return asian.concat(europe).map(country => {
            return this._sharedService.apiObjectToModelConverter(country);
          })
        })
      )
  }
}
