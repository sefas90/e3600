import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../shared/services/logout.service';
import { InformationService } from '../login/information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  currentUser = this.informationService.getAttributeFromData('user');
  _dashboard: any;
  constructor(private logoutService: LogoutService,
              private informationService: InformationService) {
  }

  ngOnInit() {
    this.informationService.getDashboard().subscribe(
      response => {
        this._dashboard = response;
        console.log(this._dashboard);
      },
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.logoutService.logout();
  }
}
