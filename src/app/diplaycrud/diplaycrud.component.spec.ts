import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplaycrudComponent } from './diplaycrud.component';

describe('DiplaycrudComponent', () => {
  let component: DiplaycrudComponent;
  let fixture: ComponentFixture<DiplaycrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplaycrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplaycrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
