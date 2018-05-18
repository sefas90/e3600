import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../shared/services/logout.service';
import { InformationService } from '../login/information.service';
// import { PermissionsService } from '../shared/services/permissions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  currentUser = this.informationService.getAttributeFromData('user');
  constructor(private logoutService: LogoutService,
              private informationService: InformationService) { }

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout();
    // this.permissionsService.cleanData();
  }

}
