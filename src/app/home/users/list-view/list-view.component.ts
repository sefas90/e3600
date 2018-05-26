import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})

export class ListViewComponent implements OnInit {
  public users: any;
  public user: User;
  constructor(private router: Router,
              private userService: UserService) {
    this.user = new User (null, null, null, null, null);
  }

  ngOnInit() {
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
