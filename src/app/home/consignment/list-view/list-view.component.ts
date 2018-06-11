import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public consignments: any;
  public consignment: Consignment;
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
              private consignmentService: ConsignmentService,
              private informationService: InformationService) {
    this.consignment = new Consignment(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.CONSIGNMENTS,
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
    this.consignmentService.loadConsignments().subscribe(
      result => {
        this.consignments = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  createConsignment() {
    this.router.navigate(['/consignments/page', {id: 0}], {skipLocationChange: true});
  }

  viewConsignment(code) {
    this.router.navigate(['consignments/watch', {code: code}], {skipLocationChange: true});
  }
}
