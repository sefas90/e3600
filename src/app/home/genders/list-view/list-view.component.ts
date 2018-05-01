import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenderService } from '../gender.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  genderForm: FormGroup;
  public genders: any;
  constructor(private router: Router,
              private genderService: GenderService) {
  }

  ngOnInit() {
    this.genderService.loadGenders().subscribe(
      result => {
        this.genders = result;
      },
      error => {
        console.log(<any>error);
      }
    );
    this.genderForm = new FormGroup({
      gender: new FormControl()
    });
  }

  createGender() {
    this.router.navigate(['/genders/page', {id: 0}], {skipLocationChange: true});
  }

  editGender(id) {
    this.router.navigate(['/genders/page', {id: id}], {skipLocationChange: true});
  }

  deleteGender(id) {
  }
}
