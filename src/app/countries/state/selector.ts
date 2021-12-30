import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";

export const getCountriesFeatureState = (state: AppState) => state.countries;

export const selectCountries = createSelector(
  getCountriesFeatureState,
  state => state.countries
);

export const selectFilteredCountries = createSelector(
  getCountriesFeatureState,
  state => state.filteredCountries
);

export const selectSelectedCountry = createSelector(
  getCountriesFeatureState,
  state => state?.selectedCountry
);

export const selectSelectedCountryName = createSelector(
  getCountriesFeatureState,
  state => state.selectedCountryName
);

export const selectSelectedCountryAlphaCode = createSelector(
  getCountriesFeatureState,
  state => state.selectedCountry.alpha3Code
);