import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EditorsRoutingModule } from './editors-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { EditorsViewComponent } from './editors-view/editors-view.component';
import { EditorService } from './editor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EditorsRoutingModule
  ],
  declarations: [
    EditorsViewComponent,
    ListViewComponent,
    PageViewComponent
  ],
  providers: [
    EditorService
  ],
  exports: []
})

export class EditorsModule { }
