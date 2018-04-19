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

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ManuscriptModule,
    BooksModule,
    GendersModule,
    EditorsModule,
    ReadersModule,
    BookstoresModule,
    ConciliationsModule,
    ConsignmentsModule,
    SalesModule,
    ToastModule.forRoot()
  ],
  providers: []
})

export class HomeModule { }
