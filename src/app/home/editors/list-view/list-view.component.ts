import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EditorService } from '../editors.service';
import { Editor } from '../editor';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public editors: any;
  public editor: Editor;
  constructor(private router: Router,
              private editorService: EditorService) {
    this.editor = new Editor (null, null, null, null);
  }

  ngOnInit() {
    this.editorService.loadEditors().subscribe(
      result => {
        this.editors = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createEditor() {
    this.router.navigate(['/editors/page', {id: 0}], {skipLocationChange: true});
  }

  editEditor(id) {
    this.router.navigate(['/editors/page', {id: id}], {skipLocationChange: true});
  }

  openModal(editor) {
    this.editor = editor;
  }

  deleteEditor() {
    this.editorService.deleteEditor(this.editor.id).subscribe(
      result => {
        this.router.navigate(['/editors/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
