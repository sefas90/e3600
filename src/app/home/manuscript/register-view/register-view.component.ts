import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Manuscript } from '../manuscript';
import { ManuscriptService } from '../manuscript.service';

@Component({
  selector: 'app-create-view',
  templateUrl: './register-view.component.html'
})
export class RegisterViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public manuscript: Manuscript;
  public button: string;
  public authorId: any;
  public genderId: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private manuscriptService: ManuscriptService) {
    this.manuscript = new Manuscript(null, null, null, null, null);
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
    this.manuscript.stage = 0;
  }

  editView(id) {
    /*this.manuscriptService.getManuscript().subscribe(
      result => {
        this.manuscript = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );*/

    this.manuscript = {
      id: 1,
      title: 'recibido',
      author: 'autor',
      gender: 'genero',
      stage: 0
    };
  }

  registerForm(value) {
    value.id_author = this.authorId.author;
    value.id_gender = this.genderId.gender;
    value.status = 0;
    if (this.id === '0') {
      this.manuscriptService.createManuscript(value).subscribe(
        result => {
          this.router.navigate(['/editors/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  receiveAuthorId($event) {
    this.authorId = $event;
  }

  receiveGenderId($event) {
    this.genderId = $event;
  }
}
