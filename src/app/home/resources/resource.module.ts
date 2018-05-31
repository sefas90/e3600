import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ResourcesRoutingModule } from './resource-routing.module';

import { ListViewComponent } from './list-view/list-view.component';
import { ResourcesViewComponent } from './resource-view/resource-view.component';
import { ResourceService } from './resource.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ResourcesRoutingModule
  ],
  declarations: [
    ResourcesViewComponent,
    ListViewComponent
  ],
  providers: [
    ResourceService
  ],
  exports: []
})

export class ResourcesModule { }
