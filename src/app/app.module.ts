import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { ReadersComponent } from './readers/readers.component';
import { ManuscriptComponent } from './manuscript/manuscript.component';
import { EditorsComponent } from './editors/editors.component';
import { Routes, RouterModule} from '@angular/router';
import { GenderComponent } from './gender/gender.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'readers', component: ReadersComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'manuscript', component: ManuscriptComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReadersComponent,
    ManuscriptComponent,
    EditorsComponent,
    GenderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
