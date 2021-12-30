import { ICountriesState } from "../countries/state";
import { IRegionsState } from "../regions/state";

export interface AppState {
  countries: ICountriesState;
  regions: IRegionsState;
}