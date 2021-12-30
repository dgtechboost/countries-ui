import { createReducer, on } from "@ngrx/store";
import { selectedRegion } from "./actions";


export interface IRegionsState {
  selectedRegion: string;
  error: string;
}

export const initialState: IRegionsState = {
  selectedRegion: '',
  error: ''
};

export const regionsReducer = createReducer<IRegionsState>(
  initialState,
  on(selectedRegion, (state, action) => {
    return {
      ...state,
      selectedRegion: action.region
    }
  })
);