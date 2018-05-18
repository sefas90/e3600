import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenderService } from '../gender.service';
import { Gender } from '../gender';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public genders: any;
  public gender: Gender;
  constructor(private router: Router,
              private genderService: GenderService) {
    this.gender = new Gender (null, null);
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
  }

  createGender() {
    this.router.navigate(['/genders/page', {id: 0}], {skipLocationChange: true});
  }

  editGender(id) {
    this.router.navigate(['/genders/page', {id: id}], {skipLocationChange: true});
  }

  openModal(gender) {
    this.gender = gender;
  }

  deleteGender() {
    this.genderService.deleteGender(this.gender.id).subscribe(
      result => {
        this.router.navigate(['/genders/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
