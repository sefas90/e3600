import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConsignmentsRoutingModule } from './consignments-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ConsignmentsViewComponent } from './consignments-view/consignments-view.component';
import { WatchViewComponent } from './watch-consignment/watch-view.component';
import { ConsignmentService } from './consignment.service';

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
    ConsignmentsViewComponent,
    PageViewComponent,
    WatchViewComponent
  ],
  providers: [
    ConsignmentService
  ],
  exports: []
})

export class ConsignmentsModule { }
