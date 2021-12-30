import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { getCountryListFail, getCountryListSuccess, getCoutryList } from ".";
import { CountriesService } from "../../services/countries.service";

@Injectable({
  providedIn: 'root'
})
export class CountriesEffects {

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService) {
  }

  getCountries$ = createEffect(() => this.actions$.pipe(
    ofType(getCoutryList),
    mergeMap(action => this.countriesService
      .getAllCountriesDetailed().pipe(
        map((countries) => {
          debugger
          return getCountryListSuccess({ countries });
        }),
        catchError((error: Error) => {
          return of(getCountryListFail(error));
        }
        )
      )
    )
  )
  );
}