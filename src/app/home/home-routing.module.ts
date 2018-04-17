import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ManuscriptViewComponent } from './manuscript/manuscript-view/manuscript-view.component';
import { routes as manuscriptRoutes } from './manuscript/manuscript-routing.module'
import { ReadersComponent } from './readers/readers.component';
import { EditorsComponent } from './editors/editors.component';
import { GenderComponent } from './gender/gender.component';

export const routes: Routes = [
  {path: '',
    component: HomeComponent,
    children: [
      {path: 'manuscript', component: ManuscriptViewComponent, children: manuscriptRoutes},
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
