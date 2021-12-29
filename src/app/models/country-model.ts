import { CurrencyModel } from "./currency-model";

export class CountryModel {
    name: string;
    alpha3Code: string;
    capital: string;
    population: number;
    currencies: CurrencyModel[];
    region: string;
    flag: string;

    constructor(_params?: any) {
        if (!_params) _params = {};
        Object.assign(this, _params);
    }
}
