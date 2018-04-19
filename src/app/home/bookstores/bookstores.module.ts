import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BookstoresRoutingModule } from './bookstores-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { BookstoresViewComponent } from './bookstores-view/bookstores-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BookstoresRoutingModule
  ],
  declarations: [
    ListViewComponent,
    BookstoresViewComponent
  ],
  providers: [],
  exports: []
})

export class BookstoresModule { }
