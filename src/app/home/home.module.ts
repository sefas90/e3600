import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ManuscriptModule } from './manuscript/manuscript.module';
import { MainComponent } from './main/main.component';
import { BooksModule } from './books/book.module';
import { GendersModule } from './genders/genders.module';
import { EditorsModule } from './editors/editors.module';
import { ReadersModule } from './readers/readers.module';
import { BookstoresModule } from './bookstores/bookstores.module';
import { ConciliationsModule } from './conciliations/conciliations.module';
import { ConsignmentsModule} from './consignment/consignments.module';
import { SalesModule } from './sales/sales.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/user.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    AuthorsModule,
    BooksModule,
    BookstoresModule,
    CommonModule,
    ConciliationsModule,
    ConsignmentsModule,
    EditorsModule,
    GendersModule,
    HomeRoutingModule,
    ManuscriptModule,
    ReadersModule,
    SalesModule,
    UsersModule,
    ToastModule.forRoot()
  ],
  providers: []
})

export class HomeModule { }
