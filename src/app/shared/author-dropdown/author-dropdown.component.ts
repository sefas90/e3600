import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AuthorService } from '../../home/authors/author.service';

@Component({
  selector: 'app-author-dropdown-component',
  templateUrl: 'author-dropdown.component.html'
})

export class SelectAuthorDropdownComponent implements OnInit {
  @Input() selectedAuthor;
  public authors: any;
  public author: any;
  @Output() authorId = new EventEmitter<any>();
  constructor(private authorService: AuthorService) {
  }

  sendId(authorId) {
    this.authorId.emit(authorId);
  }

  ngOnInit() {
    this.authorService.loadAuthors().subscribe(
      result => {
        this.authors = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
