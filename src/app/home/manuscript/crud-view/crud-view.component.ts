import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-view',
  templateUrl: './crud-view.component.html',
  styleUrls: ['./crud-view.component.scss']
})
export class CRUDComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }

    // this.spinner.show(true);
  }
}
