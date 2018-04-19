import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { SalesViewComponent } from './sales-view/sales-view.component';

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
    SalesViewComponent
  ],
  providers: [],
  exports: []
})

export class SalesModule { }
