import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './conciliations-view.component.html'
})
export class ConciliationsViewComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/conciliations/list'], {skipLocationChange: true});
  }
}
