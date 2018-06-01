import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorService } from '../editors.service';

@Component({
  selector: 'app-watch-view',
  templateUrl: './watch-view.component.html'
})
export class WatchViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public editors: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private editorService: EditorService) {
  }

  ngOnInit() {
    this.editorService.viewEditor(this.id).subscribe(
      result => {
        this.editors = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
