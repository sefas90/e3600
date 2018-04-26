import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public editors: any;
  constructor(private router: Router,
              private editorService: EditorService) {
  }

  ngOnInit() {
    this.editors = this.editorService.loadEditors();
  }

  createEditor() {
    this.router.navigate(['/editors/page', {id: 0}], {skipLocationChange: true});
  }

  editEditor(id) {
    this.router.navigate(['/editors/page', {id: id}], {skipLocationChange: true});
  }

  deleteEditor(id) {
    console.log(id);
  }
}
