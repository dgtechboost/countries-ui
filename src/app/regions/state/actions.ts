import { createAction, props } from "@ngrx/store";

export const selectedRegion = createAction(
    '[Country List Page] Selected Region',
    props<{ region: string }>()
);