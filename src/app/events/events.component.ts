import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      console.log(this.activatedRoute.snapshot.params);
      
  }

}
