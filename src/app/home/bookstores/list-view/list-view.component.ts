import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookstoreService } from '../bookstore.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public bookstores: any;
  constructor(private router: Router,
              private bookstoreService: BookstoreService) {
  }

  ngOnInit() {
    this.bookstores = this.bookstoreService.loadBookstores();
  }

  createBookstore() {
    this.router.navigate(['/bookstores/page', {id: 0}], {skipLocationChange: true});
  }

  editBookstore(id) {
    this.router.navigate(['/bookstores/page', {id: id}], {skipLocationChange: true});
  }

  deleteBookstore(id) {
    console.log(id);
  }
}
