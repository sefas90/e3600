import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-watch-view',
  templateUrl: './watch-view.component.html'
})
export class WatchViewComponent implements OnInit {
  private code = this.route.snapshot.params['code'];
  public sale: any;
  public data: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private saleService: SaleService) {
    this.sale = new Sale (null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.saleService.getSale(this.code).subscribe(
      result => {
        this.sale = result[0];
        this.data = result.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
