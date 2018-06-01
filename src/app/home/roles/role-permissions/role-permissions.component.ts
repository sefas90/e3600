import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from '../roles.service';
import { Role } from '../role';

@Component({
  selector: 'app-role-permissions-view',
  templateUrl: './role-permissions.component.html'
})
export class RolePermissionsComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public role: Role;
  public rolePermissions: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private roleService: RoleService) {
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
    console.log(value);
    /*this.roleService.createRole(value).subscribe(
      result => {
        // this.router.navigate(['/roles/page'], {skipLocationChange: true});
      },
      error => {
        console.log(error);
      }
    );*/
  }
}
