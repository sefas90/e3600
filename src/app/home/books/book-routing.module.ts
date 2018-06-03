import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { PageViewComponent } from './page-view/page-view.component';
import { AddStockComponent } from './add-stock/add-stock.component';

export const routes: Routes = [
  {path: '', component: ListViewComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'page', component: PageViewComponent},
  {path: 'stock', component: AddStockComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
