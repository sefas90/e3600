import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAuthorDropdownComponent } from './author-dropdown/author-dropdown.component';
import { SelectGenderDropdownComponent } from './gender-dropdown/gender-dropdown.component';
import { SelectReaderDropdownComponent } from './reader-dropdown/reader-dropdown.component';
import { SelectEditorDropdownComponent } from './editor-dropdown/editor-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SelectAuthorDropdownComponent,
    SelectGenderDropdownComponent,
    SelectReaderDropdownComponent,
    SelectEditorDropdownComponent
  ],
  providers: [ ],
  exports: [
    SelectAuthorDropdownComponent,
    SelectGenderDropdownComponent,
    SelectReaderDropdownComponent,
    SelectEditorDropdownComponent
  ]
})
export class SharedModule { }
