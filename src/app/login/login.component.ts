import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InformationService } from './information.service';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: User;
  returnUrl: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private informationService: InformationService
  ) {
    this.user = new User (null, null, null,  null);
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.returnUrl = this.returnUrl === '' || this.returnUrl === '/' ? '/home' : this.returnUrl;
  }

  doLogin(loginForm) {
    this.loginService.doLogin(loginForm).subscribe(
      serviceUser => {
        this.informationService.setAttributeToData('user', serviceUser);
        this.router.navigate(['/home'], {skipLocationChange: false});
      },
      error => {
        alert(error.error.text);
      }
    );
  }
}
