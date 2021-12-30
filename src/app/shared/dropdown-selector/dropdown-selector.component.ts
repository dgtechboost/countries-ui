import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.scss']
})
export class DropdownSelectorComponent implements OnInit {
  @Input() data: any;
  @Output() dataItem: EventEmitter<string> = new EventEmitter();

  selectedItemControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    if (this.data != null) {
      this.selectedItemControl = new FormControl();
    }
  }

  changeSelect(event: any) {
    let dropdownValue = event?.target?.value;
    this.selectedItemControl.setValue(dropdownValue);
    this.dataItem.emit(dropdownValue);
  }
}
