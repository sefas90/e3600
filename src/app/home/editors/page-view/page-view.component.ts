import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditorService } from '../editors.service';
import { Editor } from '../editor';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public editor: Editor;
  public button: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private editorService: EditorService) {
    this.editor = new Editor (null, null, null, null);
  }

  ngOnInit() {
    if (this.id === '0') {
      this.button = 'Crear';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.editView(this.id);
    }
  }

  createView() {

  }

  editView(id) {
    this.editorService.getEditor(id).subscribe(
      result => {
        this.editor = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  saveForm(value) {
    if (this.id === '0') {
      this.editorService.createEditor(value).subscribe(
        result => {
          this.router.navigate(['/editors/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.editorService.editEditor(value, this.id).subscribe(
        result => {
          this.router.navigate(['/editors/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
