import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthorsRoutingModule } from './authors-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AuthorsViewComponent } from './authors-view/authors-view.component';
import { AuthorService } from './author.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthorsRoutingModule
  ],
  declarations: [
    PageViewComponent,
    ListViewComponent,
    AuthorsViewComponent
  ],
  providers: [
    AuthorService
  ],
  exports: []
})

export class AuthorsModule { }
