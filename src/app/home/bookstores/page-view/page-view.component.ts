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
  public button: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookstoreService: BookstoreService) {
    this.bookstore = new Bookstore (null, null, null, null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.button = 'Crear';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.editView(this.id);
    }
  }

  createView() {

  }

  editView(id) {
    this.bookstoreService.getBookstore(id).subscribe(
      result => {
        this.bookstore = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  public saveForm(value) {
    if (this.id === '0') {
      this.bookstoreService.createBookstore(value).subscribe(
        result => {
          this.router.navigate(['/bookstores/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.bookstoreService.editBookstore(value, this.id).subscribe(
        result => {
          this.router.navigate(['/bookstores/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
