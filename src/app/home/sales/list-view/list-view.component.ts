import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public sales: any;
  public sale: Sale;
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
              private saleService: SaleService,
              private informationService: InformationService) {
    this.sale = new Sale (null, null, null, null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.DIRECT_SALES,
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
