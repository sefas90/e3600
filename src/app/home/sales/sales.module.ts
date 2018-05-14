import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { WatchViewComponent } from './watch-sale/watch-view.component';
import { SaleService } from './sale.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SalesRoutingModule
  ],
  declarations: [
    ListViewComponent,
    SalesViewComponent,
    PageViewComponent,
    WatchViewComponent
  ],
  providers: [
    SaleService
  ],
  exports: []
})

export class SalesModule { }
