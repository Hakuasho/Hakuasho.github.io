import { Component, OnInit, OnDestroy } from '@angular/core';

interface Workshop {
  title: string;
  loc: string;
  img: string;
  date: Date;
}

@Component({
  selector: 'app-plus-event',
  templateUrl: './plus-event.component.html',
  styleUrls: ['./plus-event.component.scss']
})
export class PlusEventComponent implements OnInit, OnDestroy {

  private eventDate: Date = new Date(2022, 3, 23);
  private intervalId: any;

  public today: Date;
  // @ts-ignore
  public daysLeft: number;
  // @ts-ignore
  public hoursLeft: number;
  // @ts-ignore
  public minutesLeft: number;
  // @ts-ignore
  public secondsLeft: number;
  // @ts-ignore
  public workshops: Array<Workshop>;


  constructor() {
    this.today = new Date(2022, 3, 23);
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
    this.workshops = [{
      title: 'Front-End Web Development',
      date: new Date(2022, 3, 22),
      loc: 'Central Library',
      img: '../../../assets/hdpv.jpg'
    }, {
      title: 'Matlab Programming Language',
      date: new Date(2022, 3, 23),
      loc: 'Central Library',
      img: '../../../assets/hdpv.jpg'
    },{
      title: 'Mobile and App Development talk',
      date: new Date(2022, 3, 24),
      loc: 'Lecture Hall',
      img: '../../../assets/hdpv.jpg',
    }];
    this.intervalId = setInterval(()=>{
      this.calcTimeLeft();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
