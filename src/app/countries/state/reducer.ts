import { createReducer, on } from "@ngrx/store";
import { CountryModel } from "src/app/models/country-model";
import { getCountryListFail, getCountryListSuccess, getFilteredCountryList, setSelectedCountry, getSelectedCountry, setSelectedCountryIso, setSelectedCountryName, clearCountrySelection } from "./actions";

export interface ICountriesState {
  countries: CountryModel[];
  selectedCountryName: string;
  selectedCountry: CountryModel;
  filteredCountries: CountryModel[];
  alpha3Code: string;
  error: string;
}

export const initialState: ICountriesState = {
  countries: [],
  selectedCountryName: '',
  selectedCountry: null,
  filteredCountries: [],
  alpha3Code: '',
  error: ''
};

export const countriesReducer = createReducer<ICountriesState>(
  initialState,
  on(getCountryListSuccess, (state, action) => {
    return {
      ...state,
      countries: action.countries
    }
  }),
  on(getCountryListFail, (error) => error),
  on(clearCountrySelection, (state) => {
    return {
      ...state,
      selectedCountry: null,
      selectedCountryName: ''
    }
  }
  ),
  on(setSelectedCountryName, (state, action) => {
    return {
      ...state,
      selectedCountryName: action.name
    }
  }),
  on(setSelectedCountryIso, (state, action) => {
    return {
      ...state,
      alpha3Code: action.countryIso
    }
  }),
  on(setSelectedCountry, (state, action) => {
    const selectedCountryItem = state.filteredCountries.find(item => item.name == action.name);
    return {
      ...state,
      selectedCountry: selectedCountryItem
    }
  }),
  on(getSelectedCountry, (state, action) => {
    const selectedCountryItem = state.filteredCountries.find(item => item.name == state.selectedCountryName);
    return {
      ...state,
      selectedCountry: selectedCountryItem
    }
  }),
  on(getFilteredCountryList, (state, action) => {
    const filteredItems = state.countries.filter(item => item.region == action.region);
    return {
      ...state,
      filteredCountries: filteredItems
    }
  }),
);