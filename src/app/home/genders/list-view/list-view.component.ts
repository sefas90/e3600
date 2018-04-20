import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  genderForm: FormGroup;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.genderForm = new FormGroup({
      gender: new FormControl()
    });
  }

  createGender() {
    this.router.navigate(['/genders/create'], {skipLocationChange: true});
  }
}
