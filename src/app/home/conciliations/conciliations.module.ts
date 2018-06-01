import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConciliationsRoutingModule } from './conciliations-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { PageViewComponent } from './page-view/page-view.component';
import { ConciliationsViewComponent } from './conciliations-view/conciliations-view.component';
import { ConciliationService } from './conciliation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ConciliationsRoutingModule
  ],
  declarations: [
    ListViewComponent,
    PageViewComponent,
    ConciliationsViewComponent
  ],
  providers: [
    ConciliationService
  ],
  exports: []
})

export class ConciliationsModule { }
