import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GenderService } from '../gender.service';
import { Gender } from '../gender';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public genders: any;
  public gender: Gender;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private genderService: GenderService,
              private informationService: InformationService) {
    this.gender = new Gender (null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.GENDER,
      role: this.user.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
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
