import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-plus-event',
  templateUrl: './plus-event.component.html',
  styleUrls: ['./plus-event.component.scss']
})
export class PlusEventComponent implements OnInit, OnDestroy {

  private eventDate: Date = new Date(2022, 3, 23);
  private intervalId: any;

  // @ts-ignore
  public daysLeft: number;
  // @ts-ignore
  public hoursLeft: number;
  // @ts-ignore
  public minutesLeft: number;
  // @ts-ignore
  public secondsLeft: number;

  constructor() {
    this.calcTimeLeft();
  }

  calcTimeLeft() {
    const now = new Date();
    // @ts-ignore
    const timeLeft = new Date(this.eventDate - now);

    
    this.daysLeft    = timeLeft.getDate();
    this.hoursLeft   = timeLeft.getHours();
    this.minutesLeft = timeLeft.getMinutes();
    this.secondsLeft = timeLeft.getSeconds();
  }

  ngOnInit(): void {
    this.intervalId = setInterval(()=>{
      this.calcTimeLeft();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
