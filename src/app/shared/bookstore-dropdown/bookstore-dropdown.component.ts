import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookstoreService } from '../../home/bookstores/bookstore.service';

@Component({
  selector: 'app-bookstore-dropdown-component',
  templateUrl: 'bookstore-dropdown.component.html'
})

export class SelectBookstoreDropdownComponent implements OnInit {
  public bookstores: any;
  public bookstore: any;
  @Output() bookstoreId = new EventEmitter<any>();
  constructor(private bookstoreService: BookstoreService) {
  }

  sendId(bookstoreId) {
    this.bookstoreId.emit(bookstoreId);
  }

  ngOnInit() {
    this.bookstoreService.loadBookstores().subscribe(
      result => {
        this.bookstores = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
