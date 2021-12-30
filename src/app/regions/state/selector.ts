import { createSelector } from "@ngrx/store";
import { AppState } from "../../state/app.state";

export const getRegionsFeatureState = (state: AppState) => state.regions;

export const getSelectedRegion = createSelector(
  getRegionsFeatureState,
  state => state.selectedRegion
);