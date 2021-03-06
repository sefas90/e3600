import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book } from '../book';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  bookFormGroup: FormGroup;
  private id = this.route.snapshot.params['id'];
  public book: Book;
  public button: string;
  public genderId: any;
  public authorId: any;
  public stage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private booksService: BooksService) {
    this.book = new Book (null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.button = 'Crear';
      this.stage = 'Registrar nuevo';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.stage = 'Editar';
      this.editView(this.id);
    }
  }

  createView() {
    this.bookFormGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      isbn: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ]),
      stock: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ])
    });
  }

  editView(id) {
    this.bookFormGroup = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      isbn: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ])
    });
    this.booksService.getBook(id).subscribe(
      result => {
        this.book = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  saveForm(value) {
    value.id_gender = this.genderId.gender;
    value.id_author = this.authorId.author;
    value.id_manuscript = null;
    if (this.id === '0') {
      this.booksService.createBook(value).subscribe(
        result => {
          this.router.navigate(['/books/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.booksService.editBook(value, this.id).subscribe(
        result => {
          this.router.navigate(['/books/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  receiveGenderId($event) {
    this.genderId = $event;
  }

  receiveAuthorId($event) {
    this.authorId = $event;
  }
}
