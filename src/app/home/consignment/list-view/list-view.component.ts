import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public consignments: any;
  public consignment: Consignment;
  constructor(private router: Router,
              private consignmentService: ConsignmentService) {
    this.consignment = new Consignment(null, null, null, null, null, null, null);
  }

  ngOnInit() {
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
