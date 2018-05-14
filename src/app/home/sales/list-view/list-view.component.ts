import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public sales: any;
  public sale: Sale;
  constructor(private router: Router,
              private saleService: SaleService) {
    this.sale = new Sale (null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.saleService.loadSales().subscribe(
      result => {
        this.sales = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createSale() {
    this.router.navigate(['/sales/page', {id: 0}], {skipLocationChange: true});
  }

  editSale(id) {
    this.router.navigate(['/sales/page', {id: id}], {skipLocationChange: true});
  }

  viewSale(code) {
    this.router.navigate(['sales/watch', {code: code}], {skipLocationChange: true});
  }

  openModal(sale) {
    this.sale = sale;
  }

}
