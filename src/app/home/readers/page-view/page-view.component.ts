import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReaderService } from '../reader.service';
import { Reader } from '../reader';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  readerFormGroup: FormGroup;
  private id = this.route.snapshot.params['id'];
  public reader: Reader;
  public button: string;
  public stage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private readerService: ReaderService) {
    this.reader = new Reader (null, null, null, null);
  }

  ngOnInit() {
    this.readerFormGroup = new FormGroup({
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
    this.readerService.getReader(id).subscribe(
      result => {
        this.reader = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  public saveForm(value) {
    if (this.id === '0') {
      this.readerService.createReader(value).subscribe(
        result => {
          this.router.navigate(['/readers/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.readerService.editReader(value, this.id).subscribe(
        result => {
          this.router.navigate(['/readers/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
