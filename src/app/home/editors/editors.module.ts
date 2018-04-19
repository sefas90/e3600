import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EditorsRoutingModule } from './editors-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { EditorsViewComponent } from './editors-view/editors-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EditorsRoutingModule
  ],
  declarations: [
    ListViewComponent,
    EditorsViewComponent
  ],
  providers: [],
  exports: []
})

export class EditorsModule { }
