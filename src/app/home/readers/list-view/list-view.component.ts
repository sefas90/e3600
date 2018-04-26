import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReaderService } from '../reader.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public readers: any;
  constructor(private router: Router,
              private readerService: ReaderService) {
  }

  ngOnInit() {
    this.readers = this.readerService.loadReaders();
  }

  createReader() {
    this.router.navigate(['/readers/page', {id: 0}], {skipLocationChange: true});
  }

  editReader(id) {
    this.router.navigate(['/readers/page', {id: id}], {skipLocationChange: true});
  }

  deleteReader(id) {
    console.log(id);
  }
}
