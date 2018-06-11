import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EditorService } from '../editors.service';
import { Editor } from '../editor';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public editors: any;
  public editor: Editor;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private editorService: EditorService,
              private informationService: InformationService) {
    this.editor = new Editor (null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.EDITORS,
      role: this.user.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
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

  viewEditor(id) {
    this.router.navigate(['/editors/view', {id: id}], {skipLocationChange: true});
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
