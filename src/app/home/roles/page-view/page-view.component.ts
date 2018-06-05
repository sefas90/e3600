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
  roleFormGroup: FormGroup;
  public role: Role;
  public button: string;
  public stage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private roleService: RoleService) {
    this.role = new Role (null, null, null);
  }

  ngOnInit() {
    this.roleFormGroup = new FormGroup({
      role: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      description: new FormControl('', [])
    });
    this.button = 'Crear';
    this.stage = 'Registrar nuevo';
    this.createView();
  }

  createView() {

  }

  saveForm(value) {
    this.roleService.createRole(value).subscribe(
      result => {
        this.router.navigate(['/roles/permissions', {id: result.data.id}], {skipLocationChange: true});
      },
      error => {
        console.log(error);
      }
    );
  }
}
