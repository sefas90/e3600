import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ManuscriptRoutingModule } from './manuscript-routing.module';

import { CRUDComponent } from './crud-view/crud-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ManuscriptViewComponent } from './manuscript-view/manuscript-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ManuscriptService } from './manuscript.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ManuscriptRoutingModule
  ],
  declarations: [
    CRUDComponent,
    ListViewComponent,
    ManuscriptViewComponent,
    RegisterViewComponent
  ],
  providers: [
    ManuscriptService
  ],
  exports: []
})

export class ManuscriptModule { }
