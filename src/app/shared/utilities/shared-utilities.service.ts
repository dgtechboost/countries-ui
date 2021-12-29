import { Injectable } from '@angular/core';
import { CountryModel } from 'src/app/models/country-model';
import { CurrencyModel } from 'src/app/models/currency-model';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilitiesService {

  constructor() { }

  apiObjectToModelConverter(country): CountryModel {
    const { name, capital, population, flags, currencies, region, cca3, altSpellings } = country
    let formatedCurrencies = [];

    for (const [key, value] of Object.entries(currencies)) {

      let formatedCurrency = {
        code: key,
        name: value?.['name'],
        symbol: value?.['symbol'],
      } as CurrencyModel

      formatedCurrencies.push(formatedCurrency)
    }

    let countryName = name ? name.common : this.formatName(altSpellings);

    return {
      alpha3Code: cca3,
      capital: capital ? capital[0] : countryName,
      name: countryName,
      region,
      population,
      flag: flags?.svg,
      currencies: formatedCurrencies
    } as CountryModel;
  }

  formatName(altSpellings: any) {
    return altSpellings.join();
  }
}
