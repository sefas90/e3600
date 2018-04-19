import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  createManuscript() {
    this.router.navigate(['/editores/crud'], {skipLocationChange: true});
  }
}
