import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ReadersRoutingModule } from './readers-routing.module';

import { PageViewComponent} from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { WatchViewComponent } from './watch-reader/watch-view.component';
import { ReadersViewComponent } from './readers-view/readers-view.component';
import { ReaderService } from './reader.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ReadersRoutingModule
  ],
  declarations: [
    ListViewComponent,
    PageViewComponent,
    ReadersViewComponent,
    WatchViewComponent
  ],
  providers: [
    ReaderService
  ],
  exports: []
})

export class ReadersModule { }
