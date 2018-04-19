import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';

export const routes: Routes = [
  {path: '', component: ListViewComponent},
  {path: 'list', component: ListViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GendersRoutingModule {
}
