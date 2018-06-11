import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})

export class ListViewComponent implements OnInit {
  public users: any;
  public user: User;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private loggedUser = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private userService: UserService,
              private informationService: InformationService) {
    this.user = new User (null, null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.USERS,
      role: this.loggedUser.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
    this.userService.loadUsers().subscribe(
      result => {
        this.users = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createUser() {
    this.router.navigate(['/users/page', {id: 0}], {skipLocationChange: true});
  }

  editUser(id) {
    this.router.navigate(['/users/page', {id: id}], {skipLocationChange: true});
  }

  viewUser(code) {
    this.router.navigate(['users/watch', {code: code}], {skipLocationChange: true});
  }

  openModal(user) {
    this.user = user;
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(
      result => {
        this.router.navigate(['/users/']);
      }, error => {
        console.log(error);
      }
    );
  }

}
