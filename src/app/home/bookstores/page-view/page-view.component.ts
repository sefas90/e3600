import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Bookstore } from '../bookstore';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {

  private id = this.route.snapshot.params['id'];
  public bookstore: Bookstore;
  constructor(private route: ActivatedRoute,
              private authorService: BookstoreService) {
    this.bookstore = new Bookstore (null, null, null, null, null);
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
    this.bookstore = this.authorService.getBookstore();
  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }
    console.log(this.bookstore);
    // this.spinner.show(true);
  }
}
