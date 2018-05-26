import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoleService } from '../roles.service';
import { Role } from '../role';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})

export class ListViewComponent implements OnInit {
  public roles: any;
  public role: Role;
  constructor(private router: Router,
              private roleService: RoleService) {
    this.role = new Role (null, null, null);
  }

  ngOnInit() {
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
    this.router.navigate(['/roles/page', {id: 0}], {skipLocationChange: true});
  }

  editRole(id) {
    this.router.navigate(['/roles/page', {id: id}], {skipLocationChange: true});
  }

  viewRole(code) {
    this.router.navigate(['roles/watch', {code: code}], {skipLocationChange: true});
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
