import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ConciliationsRoutingModule } from './conciliations-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { ConciliationsViewComponent } from './conciliations-view/conciliations-view.component';

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
    ConciliationsViewComponent
  ],
  providers: [],
  exports: []
})

export class ConciliationsModule { }
