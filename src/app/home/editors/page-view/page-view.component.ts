import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EditorService } from '../editors.service';
import { Editor } from '../editor';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  editorsFormGroup: FormGroup;
  private id = this.route.snapshot.params['id'];
  public editor: Editor;
  public button: string;
  public stage: string;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private editorService: EditorService) {
    this.editor = new Editor (null, null, null, null);
  }

  ngOnInit() {
    this.editorsFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z \-\']+')
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)')
      ]),
      direction: new FormControl('', [
        Validators.required
      ])
    });
    if (this.id === '0') {
      this.button = 'Crear';
      this.stage = 'Registrar nuevo';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.stage = 'Editar';
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
