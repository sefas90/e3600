import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../home/authors/author.service';

@Component({
  selector: 'app-author-dropdown-component',
  templateUrl: 'author-dropdown.component.html'
})

export class SelectAuthorDropdownComponent {
  public authors: any;
  public author: any;
  @Output() authorId = new EventEmitter<any>();
  constructor(private authorService: AuthorService) {
    this.authors = [
      {
        id: 1,
        name: '1',
        last_name: '1'
      },
      {
        id: 2,
        name: '2',
        last_name: '2'
      },
    ];
  }

  sendId(authorId) {
    this.authorId.emit(authorId);
  }

  /*
  ngOnInit() {
    this.authorService.loadAuthors().subscribe(
      result => {
        this.authors = result;
      },
      error => {
        console.log(error);
      }
    );
  }*/
}
