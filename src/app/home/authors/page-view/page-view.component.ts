import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  authorFormGroup: FormGroup;
  private id = this.route.snapshot.params['id'];
  public author: Author;
  public button: string;
  public stage: string;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authorService: AuthorService) {
    this.author = new Author (null, null, null);
  }

  ngOnInit() {
    this.authorFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
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
    this.authorService.getAuthor(id).subscribe(
      result => {
        this.author = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  saveForm(value) {
    if (this.id === '0') {
      this.authorService.createAuthor(value).subscribe(
        result => {
          this.router.navigate(['/authors/list'], {skipLocationChange: true});
        },
        error => {
          alert(error.error.message);
        }
      );
    } else {
      this.authorService.editAuthor(value, this.id).subscribe(
        result => {
          this.router.navigate(['/authors/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
