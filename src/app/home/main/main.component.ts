import { Component, OnInit } from '@angular/core';
import { ManuscriptService } from '../manuscript/manuscript.service';
import { Router } from '@angular/router';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  public manuscripts: any;
  public books: any;
  constructor(private manuscriptService: ManuscriptService,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.manuscriptService.loadUnfinishedManuscripts().subscribe(
      result => {
        this.manuscripts = result;
      },
      error => {
        console.log(<any>error);
      }
    );

    this.booksService.lowStockBooks().subscribe(
      result => {
        this.books = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  addToStock() {
    this.router.navigate(['/books'], {skipLocationChange: true});
  }
}
