import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BookstoreService } from '../bookstore.service';
import { Bookstore } from '../bookstore';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  bookstoreFormGroup: FormGroup;
  private id = this.route.snapshot.params['id'];
  public bookstore: Bookstore;
  public button: string;
  public stage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookstoreService: BookstoreService) {
    this.bookstore = new Bookstore (null, null, null, null, null);
  }

  ngOnInit() {
    this.bookstoreFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z \-\']+')
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ]),
      direction: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ])
    });
    if (this.id === '0') {
      this.button = 'Crear';
      this.stage = 'Registrar nueva';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.stage = 'Editar';
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
