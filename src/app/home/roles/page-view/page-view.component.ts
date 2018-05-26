import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleService } from '../roles.service';
import { Role } from '../role';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public role: Role;
  public button: string;
  public stage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private roleService: RoleService) {
    this.role = new Role (null, null, null);
  }

  ngOnInit() {
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
    this.roleService.getRole(id).subscribe(
      result => {
        this.role = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  saveForm(value) {
    if (this.id === '0') {
      this.roleService.createRole(value).subscribe(
        result => {
          this.router.navigate(['/roles/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.roleService.editRole(value, this.id).subscribe(
        result => {
          this.router.navigate(['/roles/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
