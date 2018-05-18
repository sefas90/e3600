import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BookstoresRoutingModule } from './bookstores-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { WatchViewComponent } from './watch-bookstore/watch-view.component'
import { BookstoresViewComponent } from './bookstores-view/bookstores-view.component';
import { BookstoreService } from './bookstore.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BookstoresRoutingModule
  ],
  declarations: [
    BookstoresViewComponent,
    ListViewComponent,
    PageViewComponent,
    WatchViewComponent
  ],
  providers: [
    BookstoreService
  ],
  exports: []
})

export class BookstoresModule { }
