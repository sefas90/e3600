import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoleService } from '../../home/roles/roles.service';

@Component({
  selector: 'app-role-dropdown-component',
  templateUrl: 'role-dropdown.component.html'
})

export class SelectRoleDropdownComponent implements OnInit {
  public roles: any;
  public role: any;
  @Output() roleId = new EventEmitter<any>();
  constructor(private roleService: RoleService) {
  }

  sendId(roleId) {
    this.roleId.emit(roleId);
  }

  ngOnInit() {
    this.roleService.loadRoles().subscribe(
      result => {
        this.roles = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
