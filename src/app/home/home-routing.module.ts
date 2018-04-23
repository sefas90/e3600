import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ManuscriptViewComponent } from './manuscript/manuscript-view/manuscript-view.component';
import { BooksViewComponent } from './books/books-view/books-view.component';
import { GendersViewComponent } from './genders/genders-view/genders-view.component';
import { EditorsViewComponent } from './editors/editors-view/editors-view.component';
import { ReadersViewComponent } from './readers/readers-view/readers-view.component';
import { BookstoresViewComponent } from './bookstores/bookstores-view/bookstores-view.component';
import { ConciliationsViewComponent } from './conciliations/conciliations-view/conciliations-view.component';
import { ConsignmentsViewComponent } from './consignment/consignments-view/consignments-view.component';
import { SalesViewComponent } from './sales/sales-view/sales-view.component';
import { AuthorsViewComponent } from './authors/authors-view/authors-view.component';
import { routes as manuscriptRoutes } from './manuscript/manuscript-routing.module';
import { routes as bookRoutes } from './books/book-routing.module';
import { routes as genderRoutes } from './genders/genders-routing.module';
import { routes as editorsRoutes } from './editors/editors-routing.module';
import { routes as readersRoutes } from './readers/readers-routing.module';
import { routes as bookstoresRoutes } from './bookstores/bookstores-routing.module';
import { routes as conciliationsRoutes } from './conciliations/conciliations-routing.module';
import { routes as consignmentsRoutes} from './consignment/consignments-routing.module';
import { routes as salesRoutes } from './sales/sales-routing.module';
import { routes as authorsRoutes } from './authors/authors-routing.module';

export const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'manuscripts', component: ManuscriptViewComponent, children: manuscriptRoutes},
      {path: 'books', component: BooksViewComponent, children: bookRoutes},
      {path: 'bookstores', component: BookstoresViewComponent, children: bookstoresRoutes},
      {path: 'conciliations', component: ConciliationsViewComponent, children: conciliationsRoutes},
      {path: 'consignments', component: ConsignmentsViewComponent, children: consignmentsRoutes},
      {path: 'editors', component: EditorsViewComponent, children: editorsRoutes},
      {path: 'genders', component: GendersViewComponent, children: genderRoutes},
      {path: 'readers', component: ReadersViewComponent, children: readersRoutes},
      {path: 'authors', component: AuthorsViewComponent, children: authorsRoutes},
      {path: 'sales', component: SalesViewComponent, children: salesRoutes},
      {path: 'home', component: MainComponent},
      {path: '**', redirectTo: '/home'},
      {path: '', pathMatch: 'full', redirectTo: '/home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
