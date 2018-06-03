import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html'
})
export class AddStockComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public book: Book;
  public button: string;
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  public bookId: any;
  public bookPrice: any;
  public bookstoreId: any;
  public date: any;
  public code: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BooksService) {
    this.book = new Book (null, null, null, null, null, null, null, null);
    this.date = new Date().toISOString().slice(0, 10);
  }

  ngOnInit() {
    this.button = 'Ingresar';
  }

  addField() {
    this.newAttribute.bookId = this.bookId;
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  removeField(index) {
    this.fieldArray.splice(index, 1);
  }

  receiveBookId($event) {
    this.bookId = $event.book.id;
  }

  saveForm(value) {
    delete (value.newPrice);
    delete (value.newQuantity);
    value.data = this.fieldArray;
    this.bookService.warehouseBook(value).subscribe(
      result => {
        this.router.navigate(['/books/list'], {skipLocationChange: true});
      },
      error => {
        console.log(error);
      }
    );
  }
}
