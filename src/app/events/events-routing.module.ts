import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlusEventComponent } from '../plus-event/plus-event.component';
import { EventsComponent } from './events.component';

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
