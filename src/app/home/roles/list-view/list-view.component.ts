import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoleService } from '../roles.service';
import { Role } from '../role';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})

export class ListViewComponent implements OnInit {
  public roles: any;
  public role: Role;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private roleService: RoleService,
              private informationService: InformationService) {
    this.role = new Role (null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.ROLES,
      role: this.user.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
    this.roleService.loadRoles().subscribe(
      result => {
        this.roles = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createRole() {
    this.router.navigate(['/roles/page'], {skipLocationChange: true});
  }

  permissionsRole(id) {
    this.router.navigate(['/roles/permissions', {id: id}], {skipLocationChange: true});
  }

  openModal(role) {
    this.role = role;
  }

  deleteRole() {
    this.roleService.deleteRole(this.role.id).subscribe(
      result => {
        this.router.navigate(['/roles/']);
      }, error => {
        console.log(error);
      }
    );
  }

}
