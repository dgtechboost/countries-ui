import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountryModel } from 'src/app/models/country-model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  
  @Input() countries: CountryModel[];
  @Input() dropDownLabel: string = "country"
  @Input() selectedCountryName: string;

  @Output() countryName: EventEmitter<any> = new EventEmitter();
  @Output() alpha3Code: EventEmitter<any> = new EventEmitter();

  countryOutput(countryName: any) {
    this.countryName.emit(countryName);
  }
}
