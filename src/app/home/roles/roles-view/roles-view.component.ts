import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './roles-view.component.html'
})
export class RolesViewComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/roles/list'], {skipLocationChange: true});
  }
}
