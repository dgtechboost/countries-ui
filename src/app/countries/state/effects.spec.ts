import { TestBed, waitForAsync } from "@angular/core/testing";
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from "@ngrx/store";
import { provideMockStore } from "@ngrx/store/testing";
import { Observable, of } from "rxjs";
import { CountriesService } from "src/app/services/countries.service";
import { CountriesEffects } from "./effects";
import * as fromActions from './actions';
import { CountryModel } from "src/app/models/country-model";

describe('CountriesEffects', () => {
    let actions$: Observable<Action>;
    let effects: CountriesEffects;
    let countriesService;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          CountriesEffects,
          provideMockStore(),
          provideMockActions(() => actions$),
          {
            provide: CountriesService,
            useValue: jasmine.createSpyObj('CountriesService', ['getAllCountriesDetailed'])
          }
        ],
      });
  
      effects = TestBed.inject<CountriesEffects>(CountriesEffects);
      countriesService = TestBed.inject<CountriesService>(CountriesService);
    }));
    
    it('should dispatch getCountryListSuccess action when getCoutryList action is dispatched', (done: DoneFn) => {
        const country = {
            alpha3Code: "GBP",
            flag: "images/gbp_flag.jpg",
            capital: "London",
            population: 65,
            name: "Great Britain",

        } as CountryModel;

        const country2 = {
            alpha3Code: "USA",
            flag: "images/usa_flag.jpg",
            capital: "Washington",
            population: 150,
            name: "United States of America",

        } as CountryModel;

        const countries = [country, country2] as CountryModel[];
  
      countriesService.getAllCountriesDetailed.and.returnValue(of(countries));
  
      actions$ = of({ type: "[Country List API] Get Country List" });
  
      effects.getCountries$.subscribe(action => {
        expect(action.type).toBe(fromActions.getCountryListSuccess.type);
        expect(action['countries']).toEqual(countries);
      });
      done();
    });
  });