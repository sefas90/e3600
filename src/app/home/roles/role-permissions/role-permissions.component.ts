import {Component, OnChanges, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from '../roles.service';
import { InformationService } from '../../../login/information.service';
import { Role } from '../role';
import * as _ from 'lodash';
@Component({
  selector: 'app-role-permissions-view',
  templateUrl: './role-permissions.component.html'
})
export class RolePermissionsComponent implements OnInit, OnChanges {
  roleFormGroup: FormGroup;
  checkboxesForm: FormGroup;
  private id = this.route.snapshot.params['id'];
  public role: Role;
  public rolePermissions: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private roleService: RoleService,
              private informationService: InformationService) {
    this.role = new Role (null, null, null);
    this.roleService.getRolePermissions(this.id).subscribe(
      result => {
        this.rolePermissions = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.roleFormGroup = new FormGroup({
      role: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      description: new FormControl('', [])
    });
    this.roleService.getRole(this.id).subscribe(
      result => {
        this.role = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  saveForm(value) {
    /*this.roleService.updateRole(value).subscribe(
      result => {
        this.router.navigate(['/roles/page'], {skipLocationChange: true});
      },
      error => {
        console.log(error);
      }
    );*/
  }

  ngOnChanges() {

  }

  update(checkbox, id, permission) {
    checkbox = !checkbox ? 1 : 0;
    const data = {
      id: id,
      permission: permission,
      value: checkbox
    };
    this.roleService.updatePermission(data).subscribe(
      result => {

      },
      error => {
        console.log(error);
      }
    );
  }
}
