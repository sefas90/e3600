import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Bookstore } from '../bookstore';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public bookstores: any;
  public bookstore: Bookstore;
  constructor(private router: Router,
              private bookstoreService: BookstoreService) {
    this.bookstore = new Bookstore(null, null, null, null, null);
  }

  ngOnInit() {
    this.bookstoreService.loadBookstores().subscribe(
      result => {
        this.bookstores = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createBookstore() {
    this.router.navigate(['/bookstores/page', {id: 0}], {skipLocationChange: true});
  }

  editBookstore(id) {
    this.router.navigate(['/bookstores/page', {id: id}], {skipLocationChange: true});
  }

  viewBookstore(id) {
    this.router.navigate(['/bookstores/view', {id: id}], {skipLocationChange: true});
  }

  openModal(bookstore) {
    this.bookstore = bookstore;
  }

  deleteBookstore() {
    this.bookstoreService.deleteBookstore(this.bookstore.id).subscribe(
      result => {
        this.router.navigate(['/bookstores/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
