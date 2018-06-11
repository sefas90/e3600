import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Bookstore } from '../bookstore';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public bookstores: any;
  public bookstore: Bookstore;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private bookstoreService: BookstoreService,
              private informationService: InformationService) {
    this.bookstore = new Bookstore(null, null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.BOOKSTORES,
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
