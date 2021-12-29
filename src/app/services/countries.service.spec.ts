import { TestBed } from '@angular/core/testing';
import { of, Subscription } from 'rxjs';
import { CountryModel } from '../models/country-model';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;
  let countrySubscription: Subscription;
  const countriesServiceSpy = jasmine.createSpyObj<CountriesService>('CountriesService', ['getAllCountriesDetailed']);
  const country: CountryModel = {
    alpha3Code: "IRL",
    capital: "Dublin",
    name: "Ireland",
    region: "Europe",
    population: 4994724,
    flag: "https://flagcdn.com/ie.svg",
    currencies: [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ]
  };
  const countries = [country];

  beforeEach(() => {
    countriesServiceSpy.getAllCountriesDetailed.and.returnValue(of(countries));

    TestBed.configureTestingModule({
      providers: [
        {
          provide: CountriesService,
          useValue: countriesServiceSpy
        }
      ]
    });
    service = TestBed.inject(CountriesService);
  });

  afterEach(() => {
    countrySubscription?.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve country list ', (done: DoneFn) => {
    countrySubscription = service.getAllCountriesDetailed().subscribe((countryList) => {
      expect(countryList).toEqual(countries);
      expect(countriesServiceSpy.getAllCountriesDetailed).toHaveBeenCalled();
      done();
    },
      (error) => done.fail());
  });
});
