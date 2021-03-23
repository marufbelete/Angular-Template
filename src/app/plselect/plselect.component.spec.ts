import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlselectComponent } from './plselect.component';

describe('PlselectComponent', () => {
  let component: PlselectComponent;
  let fixture: ComponentFixture<PlselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
