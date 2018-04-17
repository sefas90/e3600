import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManuscriptViewComponent } from './manuscript-view/manuscript-view.component';

import { SharedModule } from '../../shared/shared.module';
import { CRUDComponent } from './crud-view/crud-view.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    CRUDComponent,
    ListViewComponent,
    ManuscriptViewComponent
  ],
  providers: [],
  exports: []
})

export class ManuscriptModule { }
