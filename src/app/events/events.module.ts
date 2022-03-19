import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlusEventComponent } from '../pages/plus-event/plus-event.component';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [
    EventsComponent,
    PlusEventComponent
  ],
  imports: [
    EventsRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class EventsModule { }
