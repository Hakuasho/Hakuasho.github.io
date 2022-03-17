import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusEventComponent } from './plus-event.component';

describe('PlusEventComponent', () => {
  let component: PlusEventComponent;
  let fixture: ComponentFixture<PlusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
