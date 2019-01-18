import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputcompComponent } from './outputcomp.component';

describe('OutputcompComponent', () => {
  let component: OutputcompComponent;
  let fixture: ComponentFixture<OutputcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
