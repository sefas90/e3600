import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RolesRoutingModule } from './roles-routing.module';

import { PageViewComponent } from './page-view/page-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { RolesViewComponent } from './roles-view/roles-view.component';
import { RolePermissionsComponent } from './role-permissions/role-permissions.component';
import { RoleService } from './roles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RolesRoutingModule
  ],
  declarations: [
    RolesViewComponent,
    ListViewComponent,
    PageViewComponent,
    RolePermissionsComponent
  ],
  providers: [
    RoleService
  ],
  exports: []
})

export class RolesModule { }
