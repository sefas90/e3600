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
    this.authors = this.authorService.loadAuthors();
  }

  createManuscript() {
    this.router.navigate(['/authors/crud'], {skipLocationChange: true});
  }
}
