import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorService } from '../editor.service';
import { Editor } from '../editor';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {

  private id = this.route.snapshot.params['id'];
  public editor: Editor;
  constructor(private route: ActivatedRoute,
              private authorService: EditorService) {
    this.editor = new Editor (null, null, null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.createView();
    } else {
      this.editView();
    }
  }

  createView() {

  }

  editView() {
    this.editor = this.authorService.getEditor();
  }

  public saveForm(formValid) {
    if (!formValid) {
      return;
    }
    console.log(this.editor);
    // this.spinner.show(true);
  }
}
