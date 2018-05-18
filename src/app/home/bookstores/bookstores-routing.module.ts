import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { PageViewComponent } from './page-view/page-view.component';
import { WatchViewComponent } from './watch-bookstore/watch-view.component';

export const routes: Routes = [
  {path: '', component: ListViewComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'page', component: PageViewComponent},
  {path: 'view', component: WatchViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookstoresRoutingModule {
}
