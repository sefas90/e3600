import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConciliationService } from '../conciliation.service';
import { Conciliation } from '../conciliation';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})

export class ListViewComponent implements OnInit {
  public conciliations: any;
  public conciliation: Conciliation;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private conciliationService: ConciliationService,
              private informationService: InformationService) {
    this.conciliation = new Conciliation(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.AUTHORS,
      role: this.user.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
    this.conciliationService.loadConciliations().subscribe(
      result => {
        this.conciliations = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  createConciliation() {
    this.router.navigate(['/conciliations/page', {id: 0}], {skipLocationChange: true});
  }

  viewConciliation(code) {
    this.router.navigate(['conciliations/watch', {code: code}], {skipLocationChange: true});
  }
}
