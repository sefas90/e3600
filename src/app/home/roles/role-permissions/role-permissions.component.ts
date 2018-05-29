import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from '../roles.service';

@Component({
  selector: 'app-role-permissions-view',
  templateUrl: './role-permissions.component.html'
})
export class RolePermissionsComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public role: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private roleService: RoleService) {

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
    this.roleService.createRole(value).subscribe(
      result => {
        this.router.navigate(['/roles/page', {role: result.data.id}], {skipLocationChange: true});
      },
      error => {
        console.log(error);
      }
    );
  }
}
