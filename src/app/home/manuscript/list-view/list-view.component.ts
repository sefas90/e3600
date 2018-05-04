import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ManuscriptService } from '../manuscript.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public manusctipts: any;
  public message: any;
  constructor(private router: Router,
              private manuscriptService: ManuscriptService) {
  }

  ngOnInit() {
    this.manusctipts = [
      {
        id: 1,
        title: 'Titulo 1',
        gender: 'infantil 1',
        status: 0,
        author: 'pietro',
        create_at: '05/04/2018'
      },
      {
        id: 2,
        title: 'Titulo 2',
        gender: 'infantil 2',
        status: 1,
        author: 'pietro 2',
        create_at: '05/04/2018'
      },
      {
        id: 3,
        title: 'Titulo 3',
        gender: 'infantil 3',
        status: 2,
        author: 'pietro 3',
        create_at: '05/04/2018'
      },
      {
        id: 4,
        title: 'Titulo 4',
        gender: 'infantil 4',
        status: 3,
        author: 'pietro 4',
        create_at: '05/04/2018'
      }
    ];
    /*this.manuscriptService.loadManuscripts().subscribe(
      result => {
        this.manusctipts = result;
      },
      error => {
        console.log(<any>error);
      }
    );*/
  }

  sendToReader(manuscriptId) {
    this.manuscriptService.sendToReader(manuscriptId).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  sendToEditor(manuscriptId) {
    this.manuscriptService.sendToEditor(manuscriptId).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  approveManuscript(manuscriptId) {
    this.manuscriptService.approveManuscript(manuscriptId).subscribe(
      result => {
        this.message = result;
        this.router.navigate(['/books/create', {id: manuscriptId}], {skipLocationChange: true});
      },
      error => {
        console.log(error);
      }
    );
  }

  rejectManuscript(manuscriptId) {
    this.manuscriptService.rejectManuscript(manuscriptId).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  registerManuscript() {
    this.router.navigate(['/manuscripts/register', {id: 0}], {skipLocationChange: true});
  }

  editManuscript(manuscriptId) {
    this.router.navigate(['/manuscripts/page', {id: manuscriptId}], {skipLocationChange: true});
  }

  deleteManuscript(manuscriptId) {
    this.manuscriptService.deleteManuscript(manuscriptId).subscribe(
      result => {
        this.router.navigate(['/manuscripts/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
