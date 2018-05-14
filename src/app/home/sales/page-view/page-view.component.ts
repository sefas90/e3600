import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

@Component({
  selector: 'app-create-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public sale: Sale;
  public button: string;
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
  public bookId: any;
  public bookstoreId: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private saleService: SaleService) {
    this.sale = new Sale (null, null, null, null, null, null, null);
    this.sale.date = new Date().toLocaleDateString();
  }

  ngOnInit() {
    if (this.id === '0') {
      this.button = 'Crear';
      this.createView();
    } else {
      this.button = 'Guardar';
      this.editView(this.id);
    }
  }

  createView() {
    this.sale.date = new Date().toISOString().slice(0, 10);
  }

  editView(id) {
    this.saleService.getSale(id).subscribe(
      result => {
        this.sale = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  addField() {
    this.newAttribute.bookId = this.bookId.book;
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  removeField(index) {
    this.fieldArray.splice(index, 1);
  }

  reciveBookId($event) {
    this.bookId = $event;
  }

  receveBookstoreId($event) {
    this.bookstoreId = $event;
  }

  saveForm(value) {
    delete (value.newPrice);
    delete (value.newQuantity);
    value.bookstoreId = this.bookstoreId.bookstore;
    value.data = this.fieldArray;
    if (this.id === '0') {
      this.saleService.createSale(value).subscribe(
        result => {
          // this.router.navigate(['/sales/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.saleService.editSale(value, this.id).subscribe(
        result => {
          this.router.navigate(['/sales/list'], {skipLocationChange: true});
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
