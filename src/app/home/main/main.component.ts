import { Component, OnInit } from '@angular/core';
import { ManuscriptService } from '../manuscript/manuscript.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  public manuscripts: any;
  constructor(private manuscriptService: ManuscriptService) { }

  ngOnInit() {
    this.manuscriptService.loadUnfinishedManuscripts().subscribe(
      result => {
        this.manuscripts = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
