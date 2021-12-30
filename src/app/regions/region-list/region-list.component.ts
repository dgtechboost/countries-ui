import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent {

  @Input() regions: string[];
  @Input() dropDownLabel = "region";
  @Input() selectedRegionName: string;
  
  @Output() regionName: EventEmitter<any> = new EventEmitter();

  regionOutput(regionName: string) {
    this.regionName.emit(regionName)
  }
}
