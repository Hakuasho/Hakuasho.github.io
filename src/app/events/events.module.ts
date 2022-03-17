import { NgModule } from '@angular/core';
import { PlusEventComponent } from '../plus-event/plus-event.component';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [
    EventsComponent,
    PlusEventComponent
  ],
  imports: [
    EventsRoutingModule
  ],
  providers: [],
  bootstrap: [EventsComponent]
})
export class EventsModule { }
