import { CountryModel } from "src/app/models/country-model";
import { getCountryListSuccess, getCoutryList } from "./actions";

describe("[Country List API] Get Country List Success", () => {
    it('should create a [Country List API] Get Country List Success action', () => {
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
        const action = getCountryListSuccess({ countries: countries });
        expect(action.type).toEqual('[Country List API] Get Country List Success');
    });
})

describe("[Country List API] Get Country List", () => {
    it('should create a [Country List API] Get Country List action', () => {
        const action = getCoutryList();
        expect(action.type).toEqual('[Country List API] Get Country List');
    });
})

// and so on