import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../author';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public authors: any;
  public author: Author;
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
              private authorService: AuthorService,
              private informationService: InformationService) {
    this.author = new Author (null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.AUTHORS,
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
    this.authorService.loadAuthors().subscribe(
      result => {
        this.authors = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createAuthor() {
    this.router.navigate(['/authors/page', {id: 0}], {skipLocationChange: true});
  }

  editAuthor(id) {
    this.router.navigate(['/authors/page', {id: id}], {skipLocationChange: true});
  }

  openModal(author) {
    this.author = author;
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.author.id).subscribe(
      result => {
        this.router.navigate(['/authors/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
