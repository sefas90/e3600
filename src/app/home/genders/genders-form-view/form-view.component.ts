import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-view',
  templateUrl: './form-view.component.html'
})
export class FormViewComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }
  }
}
