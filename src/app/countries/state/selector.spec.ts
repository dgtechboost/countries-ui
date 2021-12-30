import { CountryModel } from "src/app/models/country-model";
import { AppState } from "src/app/state/app.state";
import { ICountriesState } from "./reducer";
import { selectCountries, selectSelectedCountry } from "./selector";

describe("Selectors", () => {
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

    const countries: Array<CountryModel> = [
        country,
        country2
    ];

    const initialState: AppState = {
        countries: { 
            countries: countries, 
            selectedCountry: country2,
            alpha3Code: "",
            filteredCountries: [],
            selectedCountryName: "",
            error: "" } as ICountriesState,
        regions: null
    };

    it("should select the country list", () => {
        const result = selectCountries.projector(initialState.countries);
        expect(result.length).toEqual(2);
    });

    it("should select the selected country", () => {
        const result = selectSelectedCountry.projector(
            country2.name
        );
        expect(result).not.toEqual(null);
    });
});