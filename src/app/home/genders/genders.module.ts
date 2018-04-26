import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GendersRoutingModule } from './genders-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GendersViewComponent } from './genders-view/genders-view.component';
import { GenderService } from './gender.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    GendersRoutingModule
  ],
  declarations: [
    ListViewComponent,
    GendersViewComponent,
    PageViewComponent
  ],
  providers: [
    GenderService
  ],
  exports: []
})

export class GendersModule { }
