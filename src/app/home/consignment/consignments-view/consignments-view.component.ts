import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './consignments-view.component.html'
})
export class ConsignmentsViewComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/consignments/list'], {skipLocationChange: true});
  }
}
