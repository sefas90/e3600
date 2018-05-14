import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsignmentService } from '../consignment.service';
import { Consignment } from '../consignment';

@Component({
  selector: 'app-watch-view',
  templateUrl: './watch-view.component.html'
})
export class WatchViewComponent implements OnInit {
  private code = this.route.snapshot.params['code'];
  public consignment: any;
  public data: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private consignmentService: ConsignmentService) {
    this.consignment = new Consignment (null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.consignmentService.getConsignment(this.code).subscribe(
      result => {
        this.consignment = result[0];
        this.data = result.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
