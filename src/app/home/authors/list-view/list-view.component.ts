import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public authors: any;
  public author: Author;
  constructor(private router: Router,
              private authorService: AuthorService) {
    this.author = new Author (null, null, null);
  }

  ngOnInit() {
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
