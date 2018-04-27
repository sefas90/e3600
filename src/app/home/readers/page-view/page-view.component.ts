import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReaderService } from '../reader.service';
import { Reader } from '../reader';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {

  private id = this.route.snapshot.params['id'];
  public reader: Reader;
  constructor(private route: ActivatedRoute,
              private authorService: ReaderService) {
    this.reader = new Reader (null, null, null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.createView();
    } else {
      this.editView();
    }
  }

  createView() {

  }

  editView() {
    this.reader = this.authorService.getReader();
  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }
    console.log(this.reader);
    // this.spinner.show(true);
  }
}
