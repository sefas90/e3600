import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConciliationService } from '../conciliation.service';
import { Conciliation } from '../conciliation';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})

export class ListViewComponent implements OnInit {
  public conciliations: any;
  public conciliation: Conciliation;
  constructor(private router: Router,
              private conciliationService: ConciliationService) {
    this.conciliation = new Conciliation(null, null, null, null, null, null, null);
  }

  ngOnInit() {
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
