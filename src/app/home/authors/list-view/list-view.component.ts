import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public authors: any;
  constructor(private router: Router,
              private authorService: AuthorService) {
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

  deleteAuthor(id) {
    console.log(id);
  }
}
