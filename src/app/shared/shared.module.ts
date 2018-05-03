import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAuthorDropdownComponent } from './author-dropdown/author-dropdown.component';
import { SelectGenderDropdownComponent } from './gender-dropdown/gender-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SelectAuthorDropdownComponent,
    SelectGenderDropdownComponent
  ],
  providers: [ ],
  exports: [
    SelectAuthorDropdownComponent,
    SelectGenderDropdownComponent
  ]
})
export class SharedModule { }
