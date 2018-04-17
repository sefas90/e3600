import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './manuscript-view.component.html'
})
export class ManuscriptViewComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('asdasd');
  }

  createManuscript() {
    this.router.navigate(['/manuscript/crud'], {skipLocationChange: true});
  }
}



