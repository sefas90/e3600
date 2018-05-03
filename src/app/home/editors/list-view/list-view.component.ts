import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EditorService } from '../editors.service';

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

  deleteEditor(id) {
    this.editorService.deleteEditor(id).subscribe(
      result => {
        this.router.navigate(['/editors/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
