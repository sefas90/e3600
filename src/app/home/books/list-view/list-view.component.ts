import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../books.service';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public books: any;
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  constructor(private router: Router,
              private booksService: BooksService,
              private informationService: InformationService) {
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.BOOKS,
      role: this.user.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
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
