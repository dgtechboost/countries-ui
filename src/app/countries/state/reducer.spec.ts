import { CountryModel } from 'src/app/models/country-model';
import { getCountryListSuccess } from './actions';
import * as fromReducer from './reducer';


describe('countries reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.countriesReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('getCountryListSuccess action', () =>{
    it('should retrieve all countries and update the state in an immutable way', () => {
        const { initialState } = fromReducer;
        
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

        const newState: Array<CountryModel> = [
          country,
          country2
        ];
        
        const action = getCountryListSuccess({ countries: newState });
        const state = fromReducer.countriesReducer(initialState, action);
   
        expect(state.countries).toEqual(newState);
        expect(state).not.toBe(initialState);
      });
  })
});
