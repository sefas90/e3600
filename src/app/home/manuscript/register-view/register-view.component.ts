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
  public manuscript: any;
  public button: string;
  public authorId: any;
  public genderId: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private manuscriptService: ManuscriptService) {
    this.manuscript = new Manuscript(null, null, null, null, null, null, null, null);
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
    this.manuscript.id_status = 0;
  }

  editView(id) {
    this.manuscriptService.getManuscript(id).subscribe(
      result => {
        this.manuscript = result;
        console.log(this.manuscript);
      },
      error => {
        console.log(error);
      }
    );
  }

  registerForm(value) {
    value.id_author = this.authorId.author;
    value.id_gender = this.genderId.gender;
    value.id_status = 1;
    value.status = '';
    if (this.id === '0') {
      this.manuscriptService.createManuscript(value).subscribe(
        result => {
          this.router.navigate(['/manuscripts/list'], {skipLocationChange: true});
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
