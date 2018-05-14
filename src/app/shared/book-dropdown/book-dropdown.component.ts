import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BooksService } from '../../home/books/books.service';

@Component({
  selector: 'app-book-dropdown-component',
  templateUrl: 'book-dropdown.component.html'
})

export class SelectBookDropdownComponent implements OnInit {
  @Input() selectedBook;
  public books: any;
  public book: any;
  @Output() bookId = new EventEmitter<any>();
  constructor(private booksService: BooksService) {
  }

  sendId(book) {
    this.bookId.emit(book);
  }

  ngOnInit() {
    this.booksService.loadBooks().subscribe(
      result => {
        this.books = result;

      },
      error => {
        console.log(error);
      }
    );
  }
}
