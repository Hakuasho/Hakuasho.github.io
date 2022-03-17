import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: ''
  },{
    path: '',
    component: HomeComponent
  },{
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
