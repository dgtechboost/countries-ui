import { createAction, props } from "@ngrx/store";
import { CountryModel } from "src/app/models/country-model";

export const getCoutryList = createAction('[Country List API] Get Country List');

export const getCountryListSuccess = createAction(
    '[Country List API] Get Country List Success',
    props<{ countries: CountryModel[] }>()
);

export const getCountryListFail = createAction(
    '[Country List API] Get Country List Fail',
    props<Error>()
);

export const setSelectedCountryName = createAction(
    '[Country List Page] Selected Country Name',
    props<{ name: string }>()
);

export const setSelectedCountryIso = createAction(
    '[Country List Page] Selected Country Iso',
    props<{ countryIso: string }>()
);

export const setSelectedCountry = createAction(
    '[Country List Page] Selected Country',
    props<{ name: string }>()
);

export const getSelectedCountry = createAction(
    '[Country List Page] Selected Country From Store'
);

export const getFilteredCountryList = createAction(
    '[Country List Page] Get Filtered Country List',
    props<{ region: string }>()
);

export const clearCountrySelection = createAction(
    '[Country List Page] Clear Country Selection From Store'
);