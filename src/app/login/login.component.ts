import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService) {
    this.user = new User (null, null, null,  null);
  }

  ngOnInit() {

  }

  doLogin(loginForm) {
    this.loginService.doLogin(loginForm).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/home'], {skipLocationChange: true});
      },
      error => {
        alert(error.error.text);
      }
    );
  }
}
