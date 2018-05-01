import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {

  private id = this.route.snapshot.params['id'];
  public book: Book;
  constructor(private route: ActivatedRoute,
              private booksService: BooksService) {
    this.book = new Book (
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }

  ngOnInit() {
    if (this.id === '0') {
      this.createView();
    } else {
      this.editView(this.id);
    }
  }

  createView() {

  }

  editView(id) {
    this.booksService.getBook(id).subscribe(
      result => {
        this.book = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }
    console.log(this.book);
    // this.spinner.show(true);
  }
}
