import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {

  private id = this.route.snapshot.params['id'];
  public author: Author;
  constructor(private route: ActivatedRoute,
              private authorService: AuthorService) {
    this.author = new Author (null, null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.createView();
    } else {
      this.editView(this.id);
    }
  }

  createView() {

  }

  editView(id) {
    this.authorService.getAuthor(id).subscribe(
      result => {
        this.author = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  public saveForm(value) {
    this.authorService.createAuthor(value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
