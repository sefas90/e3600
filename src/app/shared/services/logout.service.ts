import { Injectable } from '@angular/core';
import { InformationService } from '../../login/information.service';
import { Router } from '@angular/router';

@Injectable()
export class LogoutService {

  constructor(private router: Router,
              private informationService: InformationService) {
  }

  public logout(): void {
    this.informationService.removeData();
    this.router.navigate(['/login']);
  }

}
