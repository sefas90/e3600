import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ManuscriptModule } from './manuscript/manuscript.module';
import { MainComponent } from './main/main.component';
import { BooksModule } from './books/book.module';

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
    ToastModule.forRoot()
  ],
  providers: []
})

export class HomeModule { }
