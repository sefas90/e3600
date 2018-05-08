import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenderService } from '../../home/genders/gender.service';

@Component({
  selector: 'app-gender-dropdown-component',
  templateUrl: 'gender-dropdown.component.html'
})

export class SelectGenderDropdownComponent implements OnInit{
  public genders: any;
  public gender: any;
  @Output() genderId = new EventEmitter<any>();
  constructor(private genderService: GenderService) {
  }

  sendId(genderId) {
    this.genderId.emit(genderId);
  }

  ngOnInit() {
    this.genderService.loadGenders().subscribe(
      result => {
        this.genders = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
