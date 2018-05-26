import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { RegistrationValidator } from './registration-validator';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  private id = this.route.snapshot.params['id'];
  public user: User;
  public button: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.user = new User (null, null, null, null);
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
  }

  ngOnInit() {
    if (this.id === '0') {
      this.button = 'Crear';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.editView(this.id);
    }
  }

  createView() {

  }

  editView(id) {
    this.userService.getUser(id).subscribe(
      result => {
        this.user = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  saveForm(value) {
    const data = {
      name: value.data,
      username: value.username,
      password: value.passwordFormGroup.password
    };
    if (this.id === '0') {
      this.userService.createUser(data).subscribe(
        result => {
          this.router.navigate(['/users/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.userService.editUser(data, this.id).subscribe(
        result => {
          this.router.navigate(['/users/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
