import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EditorsRoutingModule } from './editors-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { WatchViewComponent } from './watch-editor/watch-view.component';
import { EditorsViewComponent } from './editors-view/editors-view.component';
import { EditorService } from './editors.service';

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
    PageViewComponent,
    WatchViewComponent
  ],
  providers: [
    EditorService
  ],
  exports: []
})

export class EditorsModule { }
