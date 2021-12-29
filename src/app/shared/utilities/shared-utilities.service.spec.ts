import { TestBed } from '@angular/core/testing';
import { CountryModel } from 'src/app/models/country-model';

import { SharedUtilitiesService } from './shared-utilities.service';

describe('SharedUtilitiesService', () => {
  let service: SharedUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('apiObjectToModelConverter', () => {
    it('should be created', () => {
      expect(service.apiObjectToModelConverter(mockCountry)).toEqual(expectedCountry);
    });
  });

});

const expectedCountry: CountryModel = {
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

const mockCountry = 

{
    "name": {
        "common": "Ireland",
        "official": "Republic of Ireland",
        "nativeName": {
            "eng": {
                "official": "Republic of Ireland",
                "common": "Ireland"
            },
            "gle": {
                "official": "Poblacht na hÉireann",
                "common": "Éire"
            }
        }
    },
    "tld": [
        ".ie"
    ],
    "cca2": "IE",
    "ccn3": "372",
    "cca3": "IRL",
    "cioc": "IRL",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "EUR": {
            "name": "Euro",
            "symbol": "€"
        }
    },
    "idd": {
        "root": "+3",
        "suffixes": [
            "53"
        ]
    },
    "capital": [
        "Dublin"
    ],
    "altSpellings": [
        "IE",
        "Éire",
        "Republic of Ireland",
        "Poblacht na hÉireann"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "languages": {
        "eng": "English",
        "gle": "Irish"
    },
    "translations": {
        "ara": {
            "official": "جمهورية أيرلندا",
            "common": "أيرلندا"
        },
        "ces": {
            "official": "Irsko",
            "common": "Irsko"
        },
        "cym": {
            "official": "Republic of Ireland",
            "common": "Ireland"
        },
        "deu": {
            "official": "Republik Irland",
            "common": "Irland"
        },
        "est": {
            "official": "Iirimaa",
            "common": "Iirimaa"
        },
        "fin": {
            "official": "Irlannin tasavalta",
            "common": "Irlanti"
        },
        "fra": {
            "official": "République d'Irlande",
            "common": "Irlande"
        },
        "hrv": {
            "official": "Republika Irska",
            "common": "Irska"
        },
        "hun": {
            "official": "Ír Köztársaság",
            "common": "Írország"
        },
        "ita": {
            "official": "Repubblica d'Irlanda",
            "common": "Irlanda"
        },
        "jpn": {
            "official": "アイルランド共和国",
            "common": "アイルランド"
        },
        "kor": {
            "official": "아일랜드 공화국",
            "common": "아일랜드"
        },
        "nld": {
            "official": "Republic of Ireland",
            "common": "Ierland"
        },
        "per": {
            "official": "ایرلند",
            "common": "ایرلند"
        },
        "pol": {
            "official": "Republika Irlandii",
            "common": "Irlandia"
        },
        "por": {
            "official": "República da Irlanda",
            "common": "Irlanda"
        },
        "rus": {
            "official": "Ирландия",
            "common": "Ирландия"
        },
        "slk": {
            "official": "Írska republika",
            "common": "Írsko"
        },
        "spa": {
            "official": "República de Irlanda",
            "common": "Irlanda"
        },
        "swe": {
            "official": "Irland",
            "common": "Irland"
        },
        "urd": {
            "official": "جمہوریہ جزیرہ آئرلینڈ",
            "common": "جزیرہ آئرلینڈ"
        },
        "zho": {
            "official": "爱尔兰共和国",
            "common": "爱尔兰"
        }
    },
    "latlng": [
        53,
        -8
    ],
    "landlocked": false,
    "borders": [
        "GBR"
    ],
    "area": 70273,
    "demonyms": {
        "eng": {
            "f": "Irish",
            "m": "Irish"
        },
        "fra": {
            "f": "Irlandaise",
            "m": "Irlandais"
        }
    },
    "flag": "🇮🇪",
    "maps": {
        "googleMaps": "https://goo.gl/maps/hxd1BKxgpchStzQC6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/62273"
    },
    "population": 4994724,
    "gini": {
        "2017": 31.4
    },
    "fifa": "IRL",
    "car": {
        "signs": [
            "IRL"
        ],
        "side": "left"
    },
    "timezones": [
        "UTC"
    ],
    "continents": [
        "Europe"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/ie.png",
        "svg": "https://flagcdn.com/ie.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/ie.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/ie.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            53.32,
            -6.23
        ]
    }
};