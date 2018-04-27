import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BooksRoutingModule } from './book-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { BooksService } from './books.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksViewComponent,
    ListViewComponent,
    PageViewComponent
  ],
  providers: [
    BooksService
  ],
  exports: []
})

export class BooksModule { }
