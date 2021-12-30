import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownSelectorComponent } from './dropdown-selector/dropdown-selector.component';



@NgModule({
  declarations: [
    DropdownSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DropdownSelectorComponent
  ],
})
export class SharedModule { }
