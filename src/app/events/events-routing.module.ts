import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlusEventComponent } from '../pages/plus-event/plus-event.component';

const routes: Routes = [
  {
    path: 'plus-event',
    component: PlusEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
