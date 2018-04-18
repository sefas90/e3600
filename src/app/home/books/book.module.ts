import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BooksRoutingModule } from './book-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { BooksViewComponent } from './books-view/books-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    ListViewComponent,
    BooksViewComponent
  ],
  providers: [],
  exports: []
})

export class BooksModule { }
