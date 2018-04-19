import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConsignmentsRoutingModule } from './consignments-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { ConsignmentsViewComponent } from './consignments-view/consignments-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ConsignmentsRoutingModule
  ],
  declarations: [
    ListViewComponent,
    ConsignmentsViewComponent
  ],
  providers: [],
  exports: []
})

export class ConsignmentsModule { }
