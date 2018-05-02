import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Manuscript } from '../manuscript';

@Component({
  selector: 'app-create-view',
  templateUrl: './register-view.component.html'
})
export class RegisterViewComponent implements OnInit {
  public manuscript: Manuscript;
  constructor() {
    this.manuscript = new Manuscript(null, null, null, null, null);
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
