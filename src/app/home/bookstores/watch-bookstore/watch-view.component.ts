import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookstoreService } from '../bookstore.service';

@Component({
  selector: 'app-watch-view',
  templateUrl: './watch-view.component.html'
})
export class WatchViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public bookstores: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookstoreService: BookstoreService) {
  }

  ngOnInit() {
    this.bookstoreService.viewBookstore(this.id).subscribe(
      result => {
        this.bookstores = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
