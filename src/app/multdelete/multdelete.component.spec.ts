import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultdeleteComponent } from './multdelete.component';

describe('MultdeleteComponent', () => {
  let component: MultdeleteComponent;
  let fixture: ComponentFixture<MultdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
