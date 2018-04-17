import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LogoutService {

  constructor(private router: Router) {
  }

  public logout(): void {
    this.router.navigate(['/login']);
  }

}
