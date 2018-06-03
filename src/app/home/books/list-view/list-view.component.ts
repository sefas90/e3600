import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public books: any;
  constructor(private router: Router,
              private booksService: BooksService) {
  }

  ngOnInit() {
    this.booksService.loadBooks().subscribe(
      result => {
        this.books = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createBook() {
    this.router.navigate(['/books/page', {id: 0}], {skipLocationChange: true});
  }

  editBook(id) {
    this.router.navigate(['/books/page', {id: id}], {skipLocationChange: true});
  }

  addToStock() {
    this.router.navigate(['/books/stock'], {skipLocationChange: true});
  }

  deleteBook(id) {
    this.booksService.deleteBook(id).subscribe(
      result => {
        this.router.navigate(['/books/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
