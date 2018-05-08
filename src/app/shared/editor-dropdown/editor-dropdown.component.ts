import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EditorService } from '../../home/editors/editors.service';

@Component({
  selector: 'app-editor-dropdown-component',
  templateUrl: 'editor-dropdown.component.html'
})

export class SelectEditorDropdownComponent implements OnInit {
  public editors: any;
  public editor: any;
  @Output() editorId = new EventEmitter<any>();
  constructor(private editorService: EditorService) {
  }

  sendId(editorId) {
    this.editorId.emit(editorId);
  }

  ngOnInit() {
    this.editorService.loadEditors().subscribe(
      result => {
        this.editors = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
