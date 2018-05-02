import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { CRUDComponent } from './crud-view/crud-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';

export const routes: Routes = [
  {path: '', component: ListViewComponent},
  {path: 'list', component: ListViewComponent},
  {path: 'crud', component: CRUDComponent},
  {path: 'register', component: RegisterViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManuscriptRoutingModule {
}
